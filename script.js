let currentCard = 0;

// Floating hearts in background
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.innerText = "💖";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Quiz navigation
function nextCard() {
  document.getElementById(`card${currentCard}`).classList.remove("active");
  currentCard++;
  document.getElementById(`card${currentCard}`).classList.add("active");
}

// YES button
function yesAnswer() {
  document.getElementById("card4").classList.remove("active");
  document.getElementById("card5").classList.add("active");
  heartExplosion();
}

// FUN NO button
function moveNo() {
  const noBtn = document.querySelector(".no");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Gift popup
function showGift(id) {
  const gift = document.getElementById(id);
  gift.style.display = "block";
  setTimeout(() => gift.style.display = "none", 2000);
}

// Heart explosion on final YES
function heartExplosion() {
  const container = document.getElementById("heart-explosion");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 200 - 100 + "px";
    heart.style.top = Math.random() * 200 - 100 + "px";
    heart.style.fontSize = Math.random() * 30 + 15 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}
