const introScene = document.querySelector("#introScene");
const bookScene = document.querySelector("#bookScene");
const wishScene = document.querySelector("#wishScene");
const startButton = document.querySelector("#startButton");
const wishButton = document.querySelector("#wishButton");
const replayButton = document.querySelector("#replayButton");
const book = document.querySelector("#book");
const heartsLayer = document.querySelector(".ambient-hearts");
const twinkleLayer = document.querySelector(".twinkles");

const scenes = [introScene, bookScene, wishScene];

function showScene(scene) {
  scenes.forEach((item) => {
    item.classList.toggle("is-active", item === scene);
  });
}

function openBook() {
  showScene(bookScene);
  window.setTimeout(() => {
    book.classList.add("is-open");
  }, 500);
}

function showWish() {
  showScene(wishScene);
}

function replay() {
  book.classList.remove("is-open");
  showScene(introScene);
}

function createHeart(index) {
  const heart = document.createElement("span");
  const size = 12 + Math.random() * 22;

  heart.className = "heart";
  heart.style.setProperty("--left", `${(index * 7.5 + Math.random() * 7) % 100}%`);
  heart.style.setProperty("--size", `${size}px`);
  heart.style.setProperty("--duration", `${6.5 + Math.random() * 5.5}s`);
  heart.style.setProperty("--sway", `${-42 + Math.random() * 84}px`);
  heart.style.setProperty("--delay", `${Math.random() * -9}s`);

  heartsLayer.appendChild(heart);
}

function createTwinkle(index) {
  const twinkle = document.createElement("span");
  const size = 3 + Math.random() * 5;

  twinkle.className = "twinkle";
  twinkle.style.setProperty("--left", `${(index * 11 + Math.random() * 8) % 100}%`);
  twinkle.style.setProperty("--top", `${8 + Math.random() * 82}%`);
  twinkle.style.setProperty("--size", `${size}px`);
  twinkle.style.setProperty("--duration", `${2.4 + Math.random() * 2.8}s`);
  twinkle.style.setProperty("--delay", `${Math.random() * -5}s`);

  twinkleLayer.appendChild(twinkle);
}

Array.from({ length: 34 }, (_, index) => createHeart(index));
Array.from({ length: 38 }, (_, index) => createTwinkle(index));

startButton.addEventListener("click", openBook);
wishButton.addEventListener("click", showWish);
replayButton.addEventListener("click", replay);
