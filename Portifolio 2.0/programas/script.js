const botaoMenu = document.querySelector(".menu-pequeno");
const menuLinks = document.querySelector(".menu-links");
const icone = botaoMenu.querySelector("i");

botaoMenu.addEventListener("click", () => {

    menuLinks.classList.toggle("ativo");

    if (menuLinks.classList.contains("ativo")) {
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-xmark");
    } else {
        icone.classList.remove("fa-xmark");
        icone.classList.add("fa-bars");
    }

});