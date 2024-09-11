// pegando elementod que irei usar
let botaoLD = document.querySelector('.bbotao');
let lanpada = document.querySelector('.cImg');
let fundo = document.querySelector('#dmain');




// funcao que decide que retorna verdadeiro ou falso pra saber se ella tem a img de lanapada quebrada
 function taQuebrada() {     
    return lanpada.src.indexOf ('quebrada') > -1
}
/* basicamente indexof pega oque ta escrito(string) dentro da src, compara com a palavra "quebrada"
pra saber se ela existe no src, se a palavra quabrada exitir ent ele ira retornar seu indice, 
(indice e o numero que representa seu possicionamento), apos isso ele usa o >  pra saber se 
 esse indice e maior q -1, se ele existir logicamente tem um indice maior q -1
 o resultado disso tudo e um retorno de  true ou false*/





// funcao que ira acender a lanpada altereando seu src, pra exibir a img da lanpada acesa
 function acendeLanpada() {
    if(!taQuebrada()) {
         lanpada.src = "img/ligada2.png"; //set atribute pega o atributo e muda seu conteudo

         if(lanpada.getAttribute('src') === "img/ligada2.png") {
            fundo.className = "acendeu"
        }
        
        }
    };

 // funcao que ira apagar a lanpada altereando seu src, pra exibir a img da lanpada apagada
/* pega o valor do resultado da funcao ta quebrada q criei e coloca esse ! n afrente pra falar tipo um nav ai fica basicamente se(nao true/false) {bloco que ira executar}*/

function apagaLanpada() {
    if(!taQuebrada()) {
                lanpada.src = "img/apagada.png";
                fundo.className = "apagou"
        };
    };
    


// funcao que ira quebra a lanpada 
function quebraLanpada() {
     lanpada.src = "img/quebrada.png";
     fundo.className = "apagou"

};





// add eventos de escutador 

// se botao vai acender ou apagar:
/*eu nao conseguir fazer usando o src pra comparar pq el retorna todo o caminhor url doe elemento */
function ligaDesliga() {
if (botaoLD.textContent === 'ligar') {
    botaoLD.textContent = 'desligar'
    acendeLanpada()
} else {
    botaoLD.textContent = 'ligar'
    apagaLanpada()
}
}

//funcoes de click

botaoLD.addEventListener('click', ligaDesliga)
lanpada.addEventListener("dblclick", quebraLanpada); // dois click

/*funcao de passar o cursor do mouse*/
lanpada.addEventListener( 'mouseover', acendeLanpada); //evento de ativar funcao ao passar  o mouse por cima
lanpada.addEventListener('mouseleave', apagaLanpada); // evento de disparar funcao ao tirar o mouse de cima



/*com saber se existe o atributo src */
/*let lanpada = document.querySelector('.cImg')
if(lanpada.hasAttribute('src')) {
    console.log("tem src")
} else {
    console.log("nao tem esse atributo")
}

*/
