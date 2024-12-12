
function aoCarregar() {
    // Carrega a "div" responsável por carregar os itens
    let pai = document.getElementById("app");
    // Cria uma "div" container
    let div1 = document.createElement("div");
    // Atribui a classe container a "div" criada
    div1.className = "container";

    // Realiza a conexão com a API, carrega os dados
    // e monta os dados de forma organizado em HTML
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        // Laço "for" com os objetos retornados pela API
        Object.keys(json).forEach(
            item => {
                // A cada volta do laço "for" de obejtos
                // pega-se um item e adiciona em uma
                // lista "ul"
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                let card = document.createElement("div");
                card.className = "card";
                ul.className = "list-group list-group-flush";
                li.className = "list-group-item";
                li.innerHTML = json[item].title;
                ul.appendChild(li);
                card.appendChild(ul);
                card.style.margin = "1rem";
                div1.appendChild(card);
                pai.appendChild(card);
            }
        )
    });

}

function produtos(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json));
}