// import "./style.css";
import gsap from "gsap";
import "./scss/style.scss";

// loader
const loadingOverlay = document.querySelector(".loading-overlay");

if (loadingOverlay) {
  const tl = gsap
    .timeline()
    .to(loadingOverlay, {
      "--percentage": "'100%'",
      roundProps: 1,
      duration: 2,
    })
    .to(loadingOverlay, {
      clipPath: "inset(0 0 100% 0)",
      pointerEvents: "none",
      duration: 0.4,
    })
    .from(".page-header h1", {
      opacity: 0,
      y: 100,
    });
}
