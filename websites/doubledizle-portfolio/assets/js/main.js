// Template functions

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

/* Intro Animation */

let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active')
            }, (idx + 1) * 600) // Time for elements to fade in
        })

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade')
                },(idx + 1) * 50) // Time for elements to fade out, essentially overwritten by screen fade out however
            })
        },2600) // Time before the first element fades up

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2600) // Time before the rest of the scene fades up. Set to the same time as the prior to have them all fade up at once.
    })
})


// // IMAGE LIGHTBOX

// window.onload = () => {
//   // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
//   let all = document.getElementsByClassName("zoomD"),
//       lightbox = document.getElementById("lightbox");
 
//   // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
//   // * SIMPLY CLONE INTO LIGHTBOX & SHOW
//   if (all.length>0) { for (let i of all) {
//     i.onclick = () => {
//       let clone = i.cloneNode();
//       clone.className = "";
//       lightbox.innerHTML = "";
//       lightbox.appendChild(clone);
//       lightbox.className = "show";
//     };
//   }}

//   // (C) CLICK TO CLOSE LIGHTBOX
//   lightbox.onclick = () => {
//     lightbox.className = "";
//   };
// };



// GREENSOCK - GSAP

gsap.utils.toArray(".col-4").forEach(col => {
  let hover = gsap.to(col, {scale: 1.05, duration: .3, paused: true, ease: "power1.inOut"}) // Set scale and speed here
  col.addEventListener("mouseenter", () => hover.play()) // Plays the animation on hover
  col.addEventListener("mouseleave", () => hover.reverse()) // Reverses the animation on exit
})
