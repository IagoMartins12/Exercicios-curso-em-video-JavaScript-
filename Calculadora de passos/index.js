

        function contar(){
            //Capturando os valores do imput
            let txtInicio = document.querySelector('input#txtInicio')
            let txtFim = document.querySelector('input#txtFim')
            let txtPasso = document.querySelector('input#txtPasso')
            
            //Declarando as variaveis com os valores do imput
            let inicio = Number (txtInicio.value)
            let fim = Number (txtFim.value)
            let passo = Number (txtPasso.value)
            txtResultado = capturarDiv()

            let validador = CheckLenght(inicio,fim,txtResultado)
            
            //Validando...
            if(validador == true){
                //Se o inicio for maior que o fim, vai contar em ordem decrescente
                if (inicio > fim) {
                    //Se o passo estiver nulo, vai setar o passo como 1
                    if (passo == 0){
                        alert ("Impossivel contar sem passo! colocando passo para 1...")
                        passo = 1
                        contarPassoAoContrario(inicio,fim,passo)
                    } else {
                        contarPassoAoContrario(inicio,fim,passo)
                    }
                } 
                //Se o inicio for menor que o fim, vai contar em order crescente e 
                else {
                    //Se o passo estiver nulo, vai setar o passo como 1
                    if (passo == 0){
                        alert ("Impossivel contar sem passo! colocando passo para 1...")
                        passo = 1
                        contarPasso(inicio,fim,passo)
                    } else {
                        contarPasso(inicio,fim,passo);
                    }
                } 
            } 

        }

        //Função para contar passo
        function contarPasso (inicio,fim,passo){
            txtResultado.innerHTML = inicio + String.fromCodePoint(0x1F600)
            do {
                    inicio += passo
                    if (inicio >= fim){
                        txtResultado.innerHTML += fim + String.fromCodePoint(0x1F60E)
                        break;
                    }
                    txtResultado.innerHTML += inicio + String.fromCodePoint(0x1F600) + " "

                } while (inicio <= fim)
        }

        //Função para contar passo ao contrario 
        function contarPassoAoContrario (inicio,fim,passo){
            txtResultado.innerHTML = inicio + String.fromCodePoint(0x1F600)
            do {
                    inicio -= passo
                    if (inicio <= fim){
                        txtResultado.innerHTML += fim + String.fromCodePoint(0x1F60E) 
                        break;
                    }
                    txtResultado.innerHTML += inicio + String.fromCodePoint(0x1F600) + " "

                } while (inicio > fim)
        }

        //Função para validar se o imput esta vazio 
        function CheckLenght(inicio,fim,txtResultado){
            let verificar
            if (inicio == "" || fim == " ") {
                txtResultado.innerHTML = "impossivel contar!"
                verificar = false
            } else {
                verificar = true
            }
            return verificar
        }

        //Função para capturar a div de resposta
        function capturarDiv (){
            let txtResultado = document.querySelector('div#res') //declarando a div da resposta
            txtResultado.style.textAlign = 'center' //alinhando o texto no centro
            return txtResultado
        }

