import { Power3 } from "gsap";

export const aboutOnEnter = (node, tl) => {
  tl.from(node, 2, {
    delay: 1,
    y: '100%',
    ease: Power3.InOut,
    opacity: 0,
    stagger: {
      amount: 0.2
    },
    duration: 0
  })
  .from(['.infoname', '.descrip'], 0.4, {
    opacity: 0,
    y: -50,
    ease: Power3.easeIn,
  })
}

export const aboutOnExit = (node, tl) => {
  tl.to(node, {
    x: '-100%',
    ease: Power3.easeOut,
    stagger: {
      amount: 0.2
    },
    duration: 2
  })
}
