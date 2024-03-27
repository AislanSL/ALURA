function adicionar() {
    let produto = document.getElementById('produto').value; 
    let quantidade = document.getElementById('quantidade').value;
    
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    let preco = quantidade * valorUnitario
    alert(nomeProduto);
    alert(valorUnitario);
    alert(preco);
    

}