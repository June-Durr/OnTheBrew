import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis

    const configureScroll = () => {
      lenis?.destroy()
      lenis = undefined

      if (reducedMotion.matches) return

      lenis = new Lenis({
        autoRaf: true,
        anchors: { offset: -64 },
        duration: 1.15,
        easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.85,
        stopInertiaOnNavigate: true,
      })
    }

    configureScroll()
    reducedMotion.addEventListener('change', configureScroll)

    return () => {
      reducedMotion.removeEventListener('change', configureScroll)
      lenis?.destroy()
    }
  }, [])

  return null
}
