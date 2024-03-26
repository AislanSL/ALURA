function alterarStatus(num) {
    let status = document.getElementById(`game-${num}`)
    let botao = status.querySelector(".dashboard__item__button");
    let img = status.querySelector(".dashboard__item__img");

    if( botao.classList.contains("dashboard__item__button--return") ) {
        img.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";

    }else{
        img.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }

    

}