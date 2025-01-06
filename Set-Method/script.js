gsap.set(".box", {
  opacity: 0,
  background: "yellow",
});

gsap.to(".box", {
  opacity: 1,
  background: "crimson",
  repeat: -1,
  duration: 5,
  yoyo: true,
  y: 100,
});
