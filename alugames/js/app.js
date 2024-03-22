function alterarStatus(num) {
    let status = document.getElementById(`game-${num}`)
    let a = status.querySelector("a");
    console.log(status);

    if( a.classList.contains('dashboard__item__button')) {
        
        //a.classList.remove('dashboard__item__button');
        a.classList.add('dashboard__item__button--return');
    }

    //console.log(status);

}