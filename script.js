const loveBtn = document.getElementById("loveBtn");
const lovePopup = document.getElementById("lovePopup");
const presentPopup = document.getElementById("presentPopup");
const presentBtn = document.getElementById("presentBtn");
const closeBtn = document.getElementById("closeBtn");

loveBtn.addEventListener("click", () => {
  lovePopup.style.display = "flex";
});

presentBtn.addEventListener("click", () => {
  lovePopup.style.display = "none";
  presentPopup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  presentPopup.style.display = "none";
});

function launchConfetti() {
  const container = document.getElementById("confetti-container");

  const colors = ["#ff3b3b", "#00ff66", "#ffffff", "#00ffcc"];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration = 1.5 + Math.random() * 1 + "s";

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 2000);
  }
}
