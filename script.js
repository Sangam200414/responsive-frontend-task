function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display =
    nav.style.display === "flex" ? "none" : "flex";
}

function showMessage() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
