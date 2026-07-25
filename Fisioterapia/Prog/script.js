const botao = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-links");


if (botao) {
    botao.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}



const formulario = document.querySelector("#formulario");


if (formulario) {

    const nome = document.querySelector("#nome");
    const telefone = document.querySelector("#telefone");
    const email = document.querySelector("#email");


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        if (
            nome.value.trim() === "" ||
            telefone.value.trim() === "" ||
            email.value.trim() === ""
        ) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }


        const telefoneLimpo = telefone.value.replace(/\D/g, "");


        if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
            alert("Digite um telefone válido.");
            return;
        }


        if (!email.value.includes("@") || !email.value.includes(".")) {
            alert("Digite um e-mail válido.");
            return;
        }


        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}