// Selecionar o botão pelo ID
const botaoBoasVindas = document.getElementById("btnBoasVindas");
const botaoMostrarData = document.getElementById("btnMostrarData");
const dataHoraElemento = document.getElementById("DataHora");

if (botaoBoasVindas){

// Adicionar um evento de clique
botaoBoasVindas.addEventListener("click", function() {
    alert("Vai, Corinthians! Bem-vindo ao site do Todo Poderoso Timão!");
});

} else{
    console.log("botão de boas-vindas nao encontrado!")
}

if (botaoMostrarData) {
    botaoMostrarData.addEventListener("click", function() {
        const dataAtual = new Date();
        const dataFormada = dataAtual.toLocaleString("pt-br", {
            dateStyle: "full",
            timeStyle: "short"
        });
        dataHoraElemento.innerText = `data e hora atual: ${dataFormada}`;
    });
} else{
    console.log("botão de mostrar data não encontrado!");
}