function alterarStatus(num) {
    let status = document.getElementById(`game-${num}`)
    let a = status.querySelector("a");

    if( a.classList.contains("dashboard__item__button--return")) {
        a.classList.remove("dashboard__item__button--return");
        a.textContent = "Alugar";

    }else{
        a.classList.add("dashboard__item__button--return");
        a.textContent = "Devolver";
    }

    

}