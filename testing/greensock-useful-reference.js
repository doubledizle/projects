// INCREASE SIZE ON HOVER, EASE OUT ON EXIT
/* Target each element that has a specific class and add an event listener to increase size on hover and smoothly revert back upon leaving*/

gsap.utils.toArray(".logo").forEach(logo => {
  let hover = gsap.to(logo, {scale: 1.2, duration: .5, paused: true, ease: "power1.inOut"}) // Set scale and speed here
  logo.addEventListener("mouseenter", () => hover.play()) // Plays the animation on hover
  logo.addEventListener("mouseleave", () => hover.reverse()) // Reverses the animation on exit
})


