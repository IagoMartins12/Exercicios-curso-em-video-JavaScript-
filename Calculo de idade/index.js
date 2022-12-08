const res = require("express/lib/response")

function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear() //pegando a data atual

    let txt = document.querySelector('input#anoNascimento')
    let anoNascimento = txt.value //pegando o valor do input do ano de nascimento

    let txtResultado = document.querySelector('div#res') //declarando a div da resposta

    let img = document.createElement('img')
    img.setAttribute('id', 'foto') // criando uma tag img e setando o id como foto 

    //verificando se o input esta valido
    if (anoNascimento == 0 || anoNascimento > anoAtual){
        alert ('ERRO!! Tente novamente')
    } else {
        let idade = anoAtual - anoNascimento //calculando a idade
        let radSex = document.getElementsByName('radSex') //pegando o sexo
        let genero = ' '

        if (radSex[0].checked) { //Se o primeiro radio estiver checado....
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute ('src', './imagens/foto-bebe-m.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute ('src', './imagens/foto-jovem-m.png')
            } else if (idade <= 51) {
                //Adulto
                img.setAttribute ('src', './imagens/foto-adulto-m.png') 
            } else {
                //Velho
                img.setAttribute ('src', './imagens/foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute ('src', './imagens/foto-bebe-f.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute ('src', './imagens/foto-jovem-f.png')
            } else if (idade <= 51) {
                //Adulto 
                img.setAttribute ('src', './imagens/foto-adulto-f.png')
            } else {
                //Velho
                img.setAttribute ('src', './imagens/foto-idoso-f.png')
            }
        }
        txtResultado.style.textAlign = 'center' //alinhando o texto no centro
        txtResultado.innerHTML = `Você é um ${genero} de ${idade} anos`
        txtResultado.appendChild(img) //Adicionando o elemento criado com o createElement ao txtResultado
    }

}