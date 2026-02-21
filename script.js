function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function scrollToSection() {
  document.querySelector(".cards").scrollIntoView({
    behavior: "smooth"
  });
}

function showMessage() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}