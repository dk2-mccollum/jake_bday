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
