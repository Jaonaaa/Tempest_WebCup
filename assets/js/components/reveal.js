// document.querySelectorAll(".reveal").forEach((reveal) => {
//   reveal.style.transitionDuration = reveal.getAttribute("duration");
//   reveal.style.transitionDelay = reveal.getAttribute("delay");
//   reveal.style.transform = reveal.getAttribute("transform");
// });
let observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      } else {
        entry.target.classList.remove("reveal-visible");
      }
    },
    {
      threshold: 0.5,
    }
  );
});
document.querySelectorAll(".reveal").forEach((reveal) => {
  reveal.style.transitionDuration = reveal.getAttribute("duration");
  reveal.style.transitionDelay = reveal.getAttribute("delay");
  observer.observe(reveal);
});
