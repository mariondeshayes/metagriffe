//Intersection Observer to add animation class on viewport entrance
const targets = document.querySelectorAll(".animate");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.dataset.anim);
      return;
    }
  });
};
const options = { root: null, threshold: 0.1 };

window.addEventListener("load", function () {
  const myObserver = new IntersectionObserver(callback, options);
  targets.forEach((target) => {
    myObserver.observe(target);
  });
});