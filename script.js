const slides = [
  { bg: "https://i.pinimg.com/736x/b5/9e/02/b59e02a1c2840f4b9c5f83d380d175d3.jpg" },
  { bg: "https://i.pinimg.com/1200x/73/6d/1f/736d1fc83f95cfbe0e668a50f28279c7.jpg" },
  { bg: "https://i.pinimg.com/736x/05/75/36/05753607feba7092b81d37c1df07b688.jpg" },
  { bg: "https://i.pinimg.com/736x/07/19/ee/0719eeee4fe543a5cd59d74093fd1a60.jpg" },
  { bg: "https://i.pinimg.com/736x/6b/17/71/6b1771c89b81fad7b4b5f8f45cf3111f.jpg" }
];

let current = 0;
const hero = document.querySelector(".hero");
const numEl = document.querySelector(".slide-number");

function showSlide(i) {
  current = (i + slides.length) % slides.length;

  // background
  hero.style.backgroundImage = `url('${slides[current].bg}')`;

  // animasi angka
  gsap.fromTo(numEl, 
    { y:100, opacity:0, scale:0.8 }, 
    { y:0, opacity:1, scale:1, duration:0.6, ease:"power3.out" }
  );
  gsap.to(numEl, { y:-100, opacity:0, scale:0.8, delay:2.1, duration:0.6, ease:"power3.in" });

  numEl.textContent = String(current+1).padStart(2,"0");
}

// auto play
setInterval(() => { showSlide(current+1); }, 3500);

// start
showSlide(0);
