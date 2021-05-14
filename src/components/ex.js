const whiteCover = document.querySelector(".page-transition-white");
const blackCover = document.querySelector(".page-transition-black");
const logo = document.querySelector(".page-transition-logo");
const imageOne = document.querySelector(".image1");
const imageTwo = document.querySelector(".image2");
const button = document.querySelector("#button");

const timeline = gsap.timeline({ paused: false });

timeline
	.fromTo(
		whiteCover,
		2.4,
		{ scaleX: 0 },
		{ scaleX: 1, transformOrigin: "left", ease: Power4.easeInOut }
	)
	.fromTo(
		blackCover,
		2.2,
		{ scaleX: 0 },
		{ scaleX: 1, transformOrigin: "left", ease: Power4.easeInOut },
		0.2
	)
	.fromTo(
		logo,
		1.6,
		{ xPercent: "50% - 100px", autoAlpha: 0 },
		{ xPercent: "50%", autoAlpha: 1, ease: Power4.easeInOut },
		0.7
	)
	.set(whiteCover, { scaleX: 0 })
	.set(imageTwo, { autoAlpha: 0 })
	.to(blackCover, 2.2, {
		scaleX: 0,
		transformOrigin: "right",
		ease: Power4.easeInOut
	})
	.to(button, { autoAlpha: 1, ease: Power2.easeInOut }, "+=.2")
	.to(logo, 0.2, { autoAlpha: 0 }, "-=1.2");

button.addEventListener("click", () => {
	timeline.play(0); // play(0) - repeats it
});
