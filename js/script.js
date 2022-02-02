document.getElementById("ggg").addEventListener("click", () => {
  console.log("clicked");
});

var typed3 = new Typed(".typing", {
  strings: ["Full Stack Developer", "MERN Stack Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true,
});

//   SCROLL REVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".about__title", {});
sr.reveal(".about__description", { delay: 200 });
sr.reveal(".about__photo", { delay: 100 });

sr.reveal(".skills__html", { interval: 30 });
