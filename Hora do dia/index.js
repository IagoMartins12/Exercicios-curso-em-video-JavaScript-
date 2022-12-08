//Declarando as areas do html que serão mudadas
let msg = document.querySelector('div#message')
let foto = document.querySelector('img#image')
let txt = document.querySelector('div#msg')

//Função que sera chamada quando o usuario carregar o site
function carregar(){
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()

    if (min < 10){
        min = '0' + min
    }
    
    msg.innerHTML = `Agora são ${hours} horas e ${min} minutos`

    

    return hours
}

//Alocando a hora em uma variavel
let hours = carregar()

//Verificando que mensagem irá retornar
function calculateHours(hours){
    if (hours >= 6 && hours < 12){
        txt.innerHTML = "Tenha um bom dia"
        foto.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hours >= 12 && hours < 18) {
        txt.innerHTML = "Tenha uma boa tarde"
        foto.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        txt.innerHTML = "Tenha uma boa noite"
        foto.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}

calculateHours(hours)
