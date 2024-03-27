let jogoAlugado = 0;


function numjogoAlugado(){
    console.log(`Jogos alugados ${jogoAlugado}`);
}




function alterarStatus(num) {
    let status = document.getElementById(`game-${num}`)
    let botao = status.querySelector(".dashboard__item__button");
    let img = status.querySelector(".dashboard__item__img");
    let nomeJogo = status.querySelector(".dashboard__item__name");

    if( botao.classList.contains("dashboard__item__button--return") ) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            img.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
        }

    }else{
        img.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";

        jogoAlugado++;
    }
    numjogoAlugado();
}

