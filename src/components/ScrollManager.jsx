import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from 'motion/react'

// Centralized scroll-on-navigate behavior for the whole app: hash links land
// on their target section, and plain route changes reset to the top --
// covering route changes, same-page hash clicks, and browser refresh from a
// single effect instead of per-link pixel hacks.
//
// Scrolling is routed through the shared Lenis instance (window.__otbLenis,
// set up in SmoothScroll.jsx) rather than native scrollTo/scrollIntoView --
// Lenis's own autoRaf loop keeps writing the scroll position back toward its
// last known target every frame, so a raw native scroll call gets fought
// and silently overridden a moment later. Lenis already carries the correct
// header-height offset (matching each section's CSS scroll-margin-top).
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const shouldReduceMotion = useReducedMotion()
  const hasMounted = useRef(false)

  useEffect(() => {
    const instant = !hasMounted.current || shouldReduceMotion

    const runScroll = () => {
      const lenis = window.__otbLenis
      const target = hash ? document.getElementById(hash.slice(1)) : null

      if (lenis) {
        // Lenis caches the document's scrollable height (its "limit") and
        // only recalculates it lazily. After a client-side route change to
        // a page of a different height, that cached limit is stale until
        // Lenis happens to re-measure -- scrollTo() then silently clamps
        // the target to the OLD (e.g. shorter) page's limit. Forcing a
        // resize() first makes it re-measure the current DOM before we ask
        // it to scroll.
        lenis.resize()
        lenis.scrollTo(target ?? 0, { immediate: instant })
      } else if (target) {
        target.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: instant ? 'auto' : 'smooth' })
      }

      hasMounted.current = true
    }

    // Double rAF: give the destination route/section a frame to finish
    // mounting and laying out (route swaps, svh-based heights, image
    // reflow) before measuring where to scroll.
    const raf = requestAnimationFrame(() => requestAnimationFrame(runScroll))
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash, shouldReduceMotion])

  return null
}
