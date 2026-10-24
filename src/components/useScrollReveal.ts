import { useEffect } from 'react'

const TARGETS = [
  '.hero__inner > *',
  '.section__head',
  '.card',
  '.steps li',
  '.value',
  '.vm__row',
  '.acronym',
  '.about > div',
  '.contact > *',
  '.cta',
  '.footer__inner',
].join(',')

/**
 * Fades elements up each time they enter the viewport while scrolling down.
 * An element that leaves below the viewport is reset so it animates again on
 * the next scroll down; elements scrolled past above stay visible, so
 * scrolling up never triggers an animation.
 */
export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS))
    els.forEach((el) => {
      const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
      el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 80}ms`)
      el.classList.add('reveal')
    })

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        } else if (entry.boundingClientRect.top > 0) {
          // Left below the viewport (scrolled back up): re-arm for the next scroll down.
          el.classList.remove('is-visible')
        } else {
          // Already above the viewport (e.g. after jumping to an anchor): keep it shown.
          el.classList.add('is-visible')
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    els.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      els.forEach((el) => el.classList.remove('reveal', 'is-visible'))
    }
  }, [routeKey])
}
