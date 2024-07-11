console.log('Entrou')


    function mensagemLogin() {      
        const cssStyles = `.erro {display: none;
        background-color: #ff0000;color: #fff; padding: 10px;              
        text-align: center;              position: fixed;              
        top: 0;              left: 0;              right: 0;              
        z-index: 999;          }            .progresso {              
        display: block;              height: 5px;              
        background-color: #00ff00;              position: fixed;              
        top: 0;              left: 0;              right: 0;              
        z-index: 998;              width: 0;
        /* Corrija para definir a largura inicial como 0 */
        }`; 
        
        const styleElement = document.createElement('style');      
        styleElement.type = 'text/css';      
        styleElement.appendChild(document.createTextNode(cssStyles));      
        document.head.appendChild(styleElement);        
        const mensagemErro = document.createElement("div");      
        mensagemErro.textContent = "Produto sem estoque";      
        mensagemErro.className = "erro";        
        const barraProgresso = document.createElement("div");      
        barraProgresso.className = "progresso";        
        document.body.appendChild(mensagemErro);      
        document.body.appendChild(barraProgresso);        
        mensagemErro.style.display = "block";      
        barraProgresso.style.display = "block"; 
        // Alterado para "block" para garantir exibição        
        let tempoRestante = 7;      
        const intervalo = 1000;        
        const temporizador = setInterval(function() {          
            tempoRestante -= 1;          
            const percentual = ((7 - tempoRestante) / 7) * 100;          
            barraProgresso.style.width = percentual + "%";            
            if (tempoRestante <= 0) {              
                clearInterval(temporizador);              
                mensagemErro.style.display = "none";              
                barraProgresso.style.display = "none";          }      }, 
                intervalo);  }