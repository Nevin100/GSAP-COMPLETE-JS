//From and FromTo Method :

//from : Here , no need to specify the initial state
gsap.from(".box1", {
  y: -200,
  duration: 2,
  ease: "linear",
  yoyo: true,
  repeat: -1,
});

//fromTo : Here we specify the initial state and also the final state
gsap.fromTo(
  ".box2",
  {
    y: 300,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    repeat: -1,
    borderRadius: 0,
  }
);
