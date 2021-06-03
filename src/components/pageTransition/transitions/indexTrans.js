import { Power3 } from "gsap";

export const homeOnEnter = (node, tl) => {
  tl.from(node, 2,{
    y: '-100%',
    ease: Power3.InOut,
    opacity: 0,
    stagger: {
      amount: 0.2
    },
    duration: 1.5
  })
}

export const homeOnExit = (node, tl) => {
  const letter = ['#s1','#s2','#s3','#s4','#s5','#s6','#s7','#s8','#x1','#x2','#x3','#x4','#x5','#x6','#x7','#x8','#x9'] 
  tl.to(letter, 1, {
    scale: 0.5,
    rotation: 0,
    y: `0`,
    x: `0`,
    ease: Power3.easeOut,
  })
  tl.to(node, {
    y: '-100%',
    ease: Power3.easeOut,
    stagger: {
      amount: 0.2
    },
    duration: 3
  })
}
