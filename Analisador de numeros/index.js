
let listaNumeros = []
let txtNumero = document.getElementById('txtNumero')
let numero = Number (txtNumero.value)
let select = document.getElementById('txtSelect')
let result = document.getElementById('res')

//Função para adicionar numeros
function Add(){
    txtNumero = document.getElementById('txtNumero')
    numero = Number (txtNumero.value)
    select = document.getElementById('txtSelect')
    result = document.getElementById('res')

    //Se a caixa de testo estiver vazio, não irá adicionar naeq
    let lenght = CheckLenght(txtNumero)

    //Adicionando o numero e limpando o resultado e imput
    if (lenght != 0 ){
        AddArray(numero,listaNumeros,select,txtNumero)
        ClearImput(txtNumero)
        ClearResult(result)
    }
}

//Função para limpar o select e resultado
function ButtonClear(){
    select = document.getElementById('txtSelect')
    result = document.getElementById('res')
    txtNumero = document.getElementById('txtNumero')

    ClearSelect(select)
    ClearImput(txtNumero)
    ClearResult(result)
    
    //Limpando o Array
    listaNumeros = []
}

//Função que irá mostrar o resultado
function Finish(){
    result = document.getElementById('res')
    select = document.getElementById('txtSelect')
    txtNumero = document.getElementById('txtNumero')

    
    //Validação para ver se o result esta preenchido
    if (select.childNodes.length === 0){
        alert ("Insira um numero para começar!")
    } else {
        //Limpando a tela e criando o resultado
        ClearResult(result)
        ClearImput(txtNumero)
        CreateParagraph(result,listaNumeros)
    }
}

//Limpar o resultado
function ClearResult(result){
    result.innerHTML = ""
    return result
}

//Limpar o select
function ClearSelect(select){    
    while (select.childNodes.length >= 1 )
    {
    select.removeChild(select.firstChild);       
    }
}

//Limpar o imput
function ClearImput(txtNumero){
    txtNumero.value = ""
    return txtNumero
}

//Verificando se o select tem ao menus
function CheckSelect (select){
    if (select.childNodes.length == 0){
        alert ("Insira um numero para começar!")
    }
}

//Verificando o tamanho do imput
function CheckLenght(txtNumero){
    if(txtNumero.value.length == 0 ){
        alert ("Por favor, insira um numero para começar")
    } 
    let lenght = txtNumero.value.length
    return lenght 
}

//Adicionando o elemento ao array
function AddArray(numero,listaNumeros,select){

    //Criando a serie de option do select
    let newOption = document.createElement('option');
    newOption.text =  'Valor ' + numero + ' adicionado'
    
    //Se o numero estiver entre 0 a 100 e nao estiver dentro do array, irá ser adicionado a lista
    if (numero >= 0 & numero <= 100){
        if (listaNumeros.includes(numero)){
            alert ("Numero ja consta na lista!")
        } else {
            select.appendChild(newOption);
            listaNumeros.push(numero)
        }
    }else {
        alert ("Favor inserir um numero entre 0 a 100")
    }
}

//Deixando o numero em ordem crescente
function SortArray(listaNumeros){
    listaNumeros.sort()
    return listaNumeros
}

//Ver o tamanho da array
function ArrayLenght(listaNumeros){
    let listaNumerosTamanho = listaNumeros.length
    return listaNumerosTamanho
}

//Maior numero do array
function ArrayMaxNumber (listaNumeros){
    let maxNumber = Math.max.apply(null,listaNumeros)
    return maxNumber
}

//Menor numero do array
function ArrayMinNumber (listaNumeros){
    let minNumber = Math.min.apply(null,listaNumeros)
    return minNumber
}

//Soma de todos os numeros do array
function ArraySumNumber (listaNumeros){
    let total = 0
    for (let i in listaNumeros){
        total += listaNumeros[i]
        i++
    }
    return total
}

//Media de todos os numeros do array
function ArrayMediaNumber (listaNumeros){
    let soma = ArraySumNumber(listaNumeros)
    let quantidade = ArrayLenght(listaNumeros)

    let media = soma / quantidade
    return media 
}

//Criando o paragrafo do resultado
function CreateParagraph (result,listaNumeros){
    let novoParagrafo = document.createElement('p')
    result.innerHTML += `<p>Ao todo, temos ${ArrayLenght(listaNumeros)} numeros cadastrados</p>` + 
                         `<p>O maior valor informado foi ${ArrayMaxNumber(listaNumeros)}</p>` +
                         `<p>O menor valor informado foi ${ArrayMinNumber(listaNumeros)}</p>` + 
                         `<p>A soma de todos os chamados foi ${ArraySumNumber(listaNumeros)}</p>` + 
                         `<p>A media de todos os numeros é ${ArrayMediaNumber(listaNumeros)}</p>`

}

