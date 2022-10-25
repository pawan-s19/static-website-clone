const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
(function init() {
  gsap.registerPlugin(ScrollTrigger);

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
})();

gsap.to(".animator .text h1 ", {
  x: "-100%",
  duration: 25,
  ease: "linear",
  repeat: -1,
});
document.querySelector(".text h1").addEventListener("mousemove", (dets) => {
  if (dets.target.className === "span") {
    dets.target.style.opacity = 0;
  }
});

document.querySelector(".text h1").addEventListener("mouseout", (dets) => {
  if (dets.target.className === "span") {
    dets.target.style.opacity = 1;
  }
});
document
  .querySelector(".animator .text")
  .addEventListener("wheel", function (e) {
    e.preventDefault();
  });

gsap.from([".nav>h1", ".nav .right"], {
  opacity: 0,
  duration: 2,
  ease: Expo.easeInOut,
  delay: 1,
});

document.querySelector(".shower").addEventListener("mousemove", (dets) => {
  if (dets.target.className === "overlay") {
    dets.target.parentNode.style.transform = ` translate(${
      -dets.clientX * 0.05
    }px,${-dets.clientY * 0.05}px)`;
  }
});
document.querySelector(".shower").addEventListener("mouseout", (dets) => {
  if (dets.target.className === "overlay") {
    dets.target.parentNode.style.transform = `translate(0,0)`;
  }
});

gsap.to(".shower", {
  scrollTrigger: {
    trigger: ".secnav h2",
    scroller: "#main",
    start: "top 100%",

    scrub: 1,
  },
  y: "-10%",
  duration: 20,
  ease: "linear",
});

gsap.to("img", {
  scrollTrigger: {
    trigger: ".curved2",
    scroller: "#main",
    start: "top 30%",
  },
  y: 0,
  ease: Expo.easeInOut,
  duration: 1,
  stagger: 0.5,
});
// let val = document.querySelector(".screen").getBoundingClientRect().left;

// document.querySelector("#home").addEventListener("scroll", function(){
//     let newval = document.querySelector(".screen").getBoundingClientRect().left;
//     let skewedval = Math.floor((newval - val)*.6);
//     document.querySelectorAll(".photu").forEach(photu => {
//         photu.style.transform = `skew(${skewedval}deg)`;
//     })
//     val = newval;
// })

// let val = document.querySelector(".shower").getBoundingClientRect().top;

// document.querySelector(".page").addEventListener("scroll", (dets) => {

// });
