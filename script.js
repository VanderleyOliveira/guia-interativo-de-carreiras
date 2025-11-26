let cardContainer = document.querySelector(".card-container")
let campoBusca = document.querySelector("header input")
let dados = []

async function iniciarBusca() {
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json")
            dados = await resposta.json()
        } catch (error) {
            console.error("Falha ao buscar dados:", error)
            return
        }
    }

    const termoBusca = campoBusca.value.toLowerCase()
    const dadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) || dado.descricao.toLowerCase().includes(termoBusca)
    )

    rederizarCards(dadosFiltrados)
}

function rederizarCards(dados) {

    cardContainer.innerHTML = ""

    for (let dado of dados) {
        let article = document.createElement("article")
        article.classList.add("card")
        article.innerHTML = `
        <h2>${dado.nome}</h2>
                
        <p>Criada em: ${dado.ano}</p>

        <p>${dado.descricao}</p>

        <a href="${dado.link}" target="_blank">Conheça mais da
                    linguagem</a>
        `

        cardContainer.appendChild(article)
    }
}