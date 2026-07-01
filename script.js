gsap.from(".home-container", {
  scale: 0,
  opacity: 0,
  duration: 1.8,
  ease: "expo.out",
  transformOrigin: "bottom right",
});
let navbar = document.querySelector(".navbar");

navbar.addEventListener("mouseenter", () => {
  navbar.classList.add("active");
  let navpart2 = document.querySelector(".nav-part2 h5");
  gsap.from(".nav-part2 h5", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
});

navbar.addEventListener("mouseleave", () => {
  navbar.classList.remove("active");
});

const mainBox = document.getElementById("mainBox");

mainBox.addEventListener("click", () => {
  mainBox.classList.toggle("active");
});

let mainHeading = document.querySelector(".home-content h1");
gsap.from(".home-content h1", {
  y: 100,
  duration: 1.4,
  delay: 0.4,
  opacity: 0,
  stagger: 0.2,
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".work1").forEach((card) => {
  let video = card.querySelector(".video");
  let content = card.querySelector(".video-content");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,

      start: "top 75%",

      toggleActions: "play none none none",
    },
  });

  tl.to(video, {
    width: "67%",
    scale: 1,

    duration: 1.2,

    ease: "power3.out",
  })

    .to(
      content,
      {
        width: "33%",

        opacity: 1,

        duration: 1,

        x: 0,

        ease: "power3.out",
      },
      "-=0.8",
    );
});

const positions = {
  left: {
    x: -230,
    scale: 0.85,
    zIndex: 1,
    opacity: 0.6,
  },

  center: {
    x: 0,
    scale: 1.15,
    zIndex: 3,
    opacity: 1,
  },

  right: {
    x: 230,
    scale: 0.85,
    zIndex: 1,
    opacity: 0.6,
  },
};

const cards = gsap.utils.toArray(".card");

gsap.set(cards[0], positions.left);

gsap.set(cards[1], positions.center);

gsap.set(cards[2], positions.right);

let order = ["left", "center", "right"];

function changeCards() {
  order.unshift(order.pop());

  cards.forEach((card, index) => {
    gsap.to(card, {
      ...positions[order[index]],

      duration: 1,

      ease: "power2.inOut",
    });
  });
}

setInterval(changeCards, 3000);

let serviceheading = document.querySelector(".container h1");
gsap.from(".container h1", {
  letterSpacing: "2vw",
  duration: 1.4,
  delay: 0.4,
  opacity: 0,
  // stagger: 0.2,
  scrollTrigger: {
    trigger: ".container h1",
  },
});

let wheading = document.querySelector(".wheading h1");
gsap.from(".wheading h1", {
  letterSpacing: "2vw",
  duration: 1.4,
  delay: 0.4,
  opacity: 0,
  // stagger: 0.2,
  scrollTrigger: {
    trigger: ".wheading h1",
  },
});

let reviewheading = document.querySelector(".heading ");
gsap.from(".heading", {
  letterSpacing: "2vw",
  duration: 1.4,
  delay: 0.4,
  opacity: 0,
  // stagger: 0.2,
  scrollTrigger: {
    trigger: ".heading",
  },
});
