
//Função principal
function Start() {

    //Capturando as variaveis
    let txtNumero = document.getElementById('txtNumero')
    let numero = Number (txtNumero.value)
    let resultado = Number 
    let select = document.getElementById('txtSelect')

    //Recebendo o tamanho do input numa variavel
    let lenght = CheckLenght(txtNumero)
        
    if (lenght != 0){
        ClearSelect(select)

        Calculate(select,resultado,numero)
    }
}

    
//Verificar se o campo foi preenchido
function CheckLenght(txtNumero){
    if(txtNumero.value.length == 0 ){
        alert ("Por favor, insira um numero para começar")
    } 
    let lenght = txtNumero.value.length
    return lenght 
}

//Limpar select
function ClearSelect(select){
    while ( select.childNodes.length >= 1 )
    {
    select.removeChild(select.firstChild);       
    }
}

//Fazer a tabuada
function Calculate(select,resultado,numero){
    for(let i=1 ;i<=10; i++){
        resultado = numero * i
        //Criando a serie de option
        let newOption = document.createElement('option');
        newOption.value= 'numero' +i
        newOption.text = numero + ' x ' + i + ' = ' + resultado
        select.appendChild(newOption);
        
    }
}