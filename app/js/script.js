// Permet d'exécuter le code Javascript APRES que le HTML ai été complètement chargé pour éviter les erreurs
document.addEventListener("DOMContentLoaded", function () {
  let menuIcone = document.querySelector("#menu");
  let navbar = document.querySelector(".navbar");

  menuIcone.onclick = () => {
    menuIcone.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
});
