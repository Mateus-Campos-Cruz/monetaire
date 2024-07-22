/*LOGIN*/

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário que recarrega a página
    logar(); // Chama a função de login
});


function logar() { //FUNÇÃO ACIONADA QUANDO CLICA NO BOTÃO ENTRAR/LOGAR

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;

    if(usuario === "" || password === ""){
        mensagemLogin('Preencha as informações corretamente!', '#dc3545');
    }else {               
        entrarConta();
        
    }

}

function entrarConta() { // DIRECIONA PARA A PÁGINA DO USUÁRIO
    window.location.href = 'accountUser.html';   
}
    
    function mensagemLogin(mensagem, color) {    
        
        const cssStyles = `.erro {
        display: none;
        background-color: ${color} ;
        color: #fff; padding: 10px;              
        text-align: center;              
        position: fixed;              
        top: 0;              
        left: 0;              
        right: 0;              
        z-index: 999;
        font-size: 24px;
        }            
        
        .progresso {              
        display: block;              
        height: 10px;              
        background-color: #00ff00;              
        position: fixed;              
        top: 0;              
        left: 0;              
        right: 0;              
        z-index: 998;              
        width: 0;
        /* Corrija para definir a largura inicial como 0 */
        }`; 
        
        const styleElement = document.createElement('style');      
        styleElement.type = 'text/css';      
        styleElement.appendChild(document.createTextNode(cssStyles));      
        document.head.appendChild(styleElement);

        const mensagemErro = document.createElement("div");      
        mensagemErro.textContent = mensagem;      
        mensagemErro.className = "erro";

        const barraProgresso = document.createElement("div");      
        barraProgresso.className = "progresso";   

        document.body.appendChild(mensagemErro);      
        document.body.appendChild(barraProgresso);

        mensagemErro.style.display = "block";      
        barraProgresso.style.display = "block"; 
        // Alterado para "block" para garantir exibição  

        let tempoRestante = 5;      
        const intervalo = 1000;       

        const temporizador = setInterval(function() {          
            tempoRestante -= 1;          
            const percentual = ((5 - tempoRestante) / 5) * 100;          
            barraProgresso.style.width = percentual + "%";            
            if (tempoRestante <= 0) {              
                clearInterval(temporizador);              
                mensagemErro.style.display = "none";              
                barraProgresso.style.display = "none";          
            }      
        }, intervalo);  
    }

    /**LOGIN FIM */

    /*ABRA SUA CONTA*/

   
    function limitarCaracteres(input, maxLength) {
            if (input.value.length > maxLength) {
                input.value = input.value.slice(0, maxLength);
            }
        }

    function procurarCep(){ // ACIONA A API PARA PROCURAR INFORMAÇÕES DO CEP

        const campo = document.getElementById('cep').value
        

        if(campo === ""){
            document.getElementById('infoAdressAPI').style.display = 'none'
        }else if(campo.length === 8){

                const cssStyles = ` 
                #content1 {
                display: flex;
                flex-direction: column;
                width: 80%;
                          }

                .content2 {
                margin-bottom: 20px;
                margin-top: 20px;
                font-size: 1.3em;                          
                          }

                #content3 {
                width: 20%;
                padding: 8px;
                font-size: 1.3em;
                font-weight: bold;
                border-radius: 20px;
                border: 2px solid #000033;
                } 

                .content4 {
                color: #cd950c; 
                margin-bottom: 20px;
                margin-top: 20px;
                font-size: 1.3em; 
                }
                `;
                //Aciona o elemento style dentro do documento
                
                const styleElement = document.createElement('style');
                styleElement.type = 'text/css';
                styleElement.appendChild(document.createTextNode(cssStyles));
                document.head.appendChild(styleElement);

                // Aplica o id content1 ao elemento com id infoAdressAPI
                const content1 = document.getElementById('infoAdressAPI');
                content1.id = "content1";

                // Aplica a classe content2 a todos os elementos com a classe label
                const content2 = document.getElementsByClassName('label');
                for (let i = 0; i < content2.length; i++) {
                    content2[i].className += " content2";
                }

                const content3 = document.getElementById('numero');
                content3.id = "content3";

                const content4 = document.getElementsByClassName('Address');
                for (let i = 0; i < content4.length; i++){
                    content4[i].className += " content4";
                }
                

                buscarCep()

            }else{
                document.getElementById('infoAdressAPI').style.display = 'none'
            }
        }

        async function buscarCep() { // API DE CEP
            const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (cep === "") {
                alert('Por favor, digite um CEP.');
                return;
            }

            const cepRegex = /^[0-9]{8}$/;
            if (!cepRegex.test(cep)) {
                alert('CEP inválido. Por favor, digite um CEP válido.');
                return;
            }

            const url = `https://viacep.com.br/ws/${cep}/json/`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.erro) {
                    alert('CEP não encontrado.');
                    return;
                }

                document.getElementById('logradouro').textContent = data.logradouro || 'Não disponível';
                document.getElementById('bairro').textContent = data.bairro || 'Não disponível';
                document.getElementById('cidade').textContent = data.localidade || 'Não disponível';
                document.getElementById('estado').textContent = data.uf || 'Não disponível';
            } catch (error) {
                console.error('Erro ao buscar o CEP:', error);
                alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
            }
        }
    

    function verificarInfoConta() { // VERIFICA SE INFORMAÇÕES DO FORMULARIO NOVA CONTA ESTA PREENCHIDO
         
        const nome = document.getElementById('nome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const nomeMae = document.getElementById('nomeMae').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const cep = document.getElementById('cep').value;
        const numero = document.getElementById('numero').value;
        const tipoConta = document.getElementById('tipoConta').value;
        const salario = document.getElementById('salario').value;

        if(nome === "" ){
            mensagemLogin('Preencha o nome!', '#dc3545');
        }else if(dataNascimento === ""){
            mensagemLogin('Preencha o data de nascimento!', '#dc3545');
        }else if(nomeMae === ""){
            mensagemLogin('Preencha o nome da mãe!', '#dc3545');
        }else if(telefone === ""){
            mensagemLogin('Preencha o telefone!', '#dc3545');
        }else if(email === ""){
            mensagemLogin('Preencha o email!', '#dc3545');
        }else if(cep === ""){  
            mensagemLogin('Preencha o cep!', '#dc3545');
        }else if(numero === ""){ 
            mensagemLogin('Preencha o número!', '#dc3545');
        }else if(tipoConta === ""){             
            mensagemLogin('Preencha o tipo de conta!', '#dc3545');
        }else if(tipoConta === ""){ 
            mensagemLogin('Preencha o salário!', '#dc3545');
        }else {
            mensagemLogin('Criando a sua conta!', '#198754');
            window.location.href = 'login.html';

        }
    }
        /*ABRA SUA CONTA FIM*/

        /**TRANSFERÊNCIA*/

        function abrirTransferencia() {
            console.log('abrirTransferencia chamada');
        
            // Esconde todos os elementos com a classe 'firstContent'
            const firstContents = document.getElementsByClassName('firstContent');
            for (let i = 0; i < firstContents.length; i++) {
                console.log('Escondendo firstContent:', firstContents[i]);
                firstContents[i].style.display = 'none';
            }
        
            // Exibe todos os elementos com a classe 'transferencia'
            const transferencias = document.getElementsByClassName('transferencia');
            for (let i = 0; i < transferencias.length; i++) {
                console.log('Exibindo transferencia:', transferencias[i]);
                transferencias[i].style.display = 'block';
            }
        }
        