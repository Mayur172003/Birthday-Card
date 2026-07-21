import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function revealOnScroll(
  elements: string | Element | Element[],
  options?: gsap.TweenVars,
) {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: Array.isArray(elements) ? elements[0] : elements,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    ...options,
  })
}
