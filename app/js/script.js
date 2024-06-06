document.addEventListener("DOMContentLoaded", function () {
  let menuIcone = document.querySelector("#menu");
  let navbar = document.querySelector(".navbar");

  // change l'icone burger et retire ou met la classe active à la navbar pour l'afficher ou non
  // (version tablette/mobile)
  menuIcone.onclick = () => {
    menuIcone.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
});
