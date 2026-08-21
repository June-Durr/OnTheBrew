import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis

    const configureScroll = () => {
      lenis?.destroy()
      lenis = undefined
      window.__otbLenis = undefined

      if (reducedMotion.matches) return

      const headerHeight = document.querySelector('header')?.offsetHeight ?? 56

      lenis = new Lenis({
        autoRaf: true,
        anchors: { offset: -headerHeight },
        duration: 1.15,
        easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.85,
        stopInertiaOnNavigate: true,
      })

      // Exposed so other components (ScrollManager) can drive scroll through
      // Lenis instead of the native scrollTo/scrollIntoView APIs -- calling
      // those directly fights Lenis's own autoRaf loop, which keeps
      // overwriting the scroll position back toward its last known target.
      window.__otbLenis = lenis
    }

    configureScroll()
    reducedMotion.addEventListener('change', configureScroll)

    return () => {
      reducedMotion.removeEventListener('change', configureScroll)
      lenis?.destroy()
      window.__otbLenis = undefined
    }
  }, [])

  return null
}
