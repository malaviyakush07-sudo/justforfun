document.addEventListener("mousemove", function(e) {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "floatUp 1s linear";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});