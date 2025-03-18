//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); //retira os espaços extras

    if(nomeAmigo){
        amigos.push(nomeAmigo);        
        atualizarListaAmigos();  // Atualiza a lista exibida
        inputAmigo.value = '';  // Limpa o campo de entrada após adicionar
    } else{
        alert('Por favor, insira um nome válido');
    }

}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';  // Limpa a lista atual

    amigos.forEach((amigo) => {
        const li = document.createElement('li');  // Cria um novo item de lista
        li.textContent = amigo;  // Define o texto do item como o nome do amigo
        listaAmigosElement.appendChild(li);  // Adiciona o item à lista
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];  // Sorteia um amigo aleatoriamente

    // Exibe o resultado do sorteio na seção de resultados
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
