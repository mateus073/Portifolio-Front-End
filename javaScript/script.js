// comeco do efeito de hover nos itens do menu de navegaçao:

// selecionno todos os (a) dos (li)
let menuLInks = document.querySelectorAll('.aLink');

// loop pra adicionar os efeitos de mudar a cor em todos os links(a) do menu de navegacao
menuLInks.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('jsA')
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('jsA')
    })
})



/*msm logica do codigo encima, porem para aumentar a scale dos li */
let zoonLi = document.querySelectorAll('.menuLi');

zoonLi.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('jsLi')
    })
    item.addEventListener('mouseout', () => {
        item.classList.remove('jsLi')
    })
})
// fim do js do menu de navegacao 



/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



//  comeco do zoom da minha foto da capa 
let foto = document.querySelector('.zoom')

foto.addEventListener('mouseover', () => {
    foto.classList.add('jsZ')
})

foto.addEventListener('mouseout', () => {
    foto.classList.remove('jsZ')
})
// fim do efeito de zoom na minha foto



/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



// comeco do efeito de cor de fundo do meus links de redes sociais

// seleciona todos as imgs de redes sociais
let imgSocial = document.querySelectorAll('#imgSocial')

// loop que aciona a funcao responsavel por dar adiconar e remover a class responsavel pelo efeito 
imgSocial.forEach(item => {
    item.addEventListener('mouseover', corLink);
    item.addEventListener('mouseout', () => {
        item.classList.remove('jsGit', 'jsLkd', 'jsInsta', 'jsWhats')
    })
});


// funcao responsavel pelo efeito de zomm e alteara a cor 
function corLink() {
    let socialClass = this.getAttribute('class')  // atribui as class dos elementos do loop pra uma variavel 

    // condicionais que virificam a class dos elementos e adiciona classes especificas pra cada um
    if(socialClass.includes('git')) {
        this.classList.add('jsGit')
    } else if (socialClass.includes('linkedin')) {
        this.classList.add('jsLkd')
    } else if (socialClass.includes('instagram')) {
        this.classList.add('jsInsta')
    } else if (socialClass.includes('whatsapp')) {
        this.classList.add('jsWhats')
    }
}
// fim do efeito das imgs/botoes de redes sociais 

//usar include pra verrificar o nome da class pos o getAtribute retorna todas as class e nesse caso queremos verificar apenas uma 
//sempre que for selecionar varios elemtos como o "querySelectorAll" preferir usar class em vez de id, pos class e o correto pra usar em varios elementos 
// lembrar sempre que item e o elemntos que acionou a funcao, na hora que for se rreferir ao elemento que sera adicionado a class ou sera modificado usamos o this



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */



// Seleção dos elementos principais// Seleciona os elementos necessários
let esp = document.getElementById('esp-js'); // Div que exibe especificações de projetos
let divs = document.querySelectorAll('.DimgProj'); // Divs pai que contêm os projetos e os os span
let p = document.getElementById('pr'); // Parágrafo presente em especificações (fallback)

// objeto que contem os artigos dos projetos que foram selecionado pelo id
let artigos = {
    sClc: document.getElementById('artjs'),  // Artigo "Calculadora"
    sLt: document.getElementById('artLt'),   // Artigo "Lista de Tarefas"
    sFlm: document.getElementById('artFlm'), // Artigo "Filmes e Séries"
    sLpd: document.getElementById('artLpd')  // Artigo "Lâmpada"
};




// Função para remover o conteúdo anterior de 'esp' e adicionar o novo artigo
function addArt(id) {
    if (p) {
        p.remove(); // Remove o parágrafo de instruções, se existir
    }
    
    // Remove o primeiro elemento de 'esp', se existir
    let primeiroElemento = esp.firstElementChild;
    if (primeiroElemento) {
        esp.removeChild(primeiroElemento);
    }
    
    // Adiciona o artigo correspondente com base no ID do span
    let artigo = artigos[id];
    if (artigo) {
        esp.appendChild(artigo);  // Adiciona o artigo à div de especificações
        artigo.classList.add('exibeArt'); // Adiciona a classe que exibe o artigo
    }
    else {
        esp.appendChild(p)
    }
}




// Loop pelas divs dos projetos e adição de evento 'mouseover' nos spans
divs.forEach(div => {
    let spanP = div.querySelector('span'); // Seleciona o span (título do projeto)
    
    // Verifica se o span existe antes de adicionar o evento
    if (spanP) {
        spanP.addEventListener('mouseover', () => addArt(spanP.id));
    }
});

/*aprende a usar funcao anonima, como a funcao precisa do span, que ta dentro do loop eu crio uma funcao anonima no loop que chama a funcao externa e passa os parametros que ela iria precisar */

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// comeco do js responsavel por exibir e deixar de exibir o restante dos projetos que estao ocultos com display none
let dvVerMais = document.getElementById('vverMais') //div que contem o restante dos projetos 
let btVM = document.getElementById('bbver') //botao "ver mais" que ira mostrar ou ocultar o restante dos projetos

//funcao que da a class que contem o display flex e exibe os projetos
function verMais() {
    dvVerMais.classList.add('exbP') 
}

//funcao que remove a class que contem o display flex e oculta novamente os projetos
function verMenos() {
    dvVerMais.classList.remove('exbP') 
}

// funcao responsavel por mudar o texto do botao 
function verProjetos() {
    if(!dvVerMais.classList.contains('exbP')) {
        verMais()
        btVM.textContent = 'Ver Menos'
    } else{
        verMenos()
        btVM.textContent = 'Ver Mais'
    }
}

btVM.addEventListener('click', verProjetos)



/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


// js do menu mobille abrir e fechar 
let abri = document.getElementById('abrir')
let menu = document.getElementById('menuMob')
let fecha = document.getElementById('btFechar')
let overlay = document.getElementById('overlay')

abri.addEventListener('click', ()=>{
    menu.classList.add('abrirMenu')
})

fecha.addEventListener('click', ()=>{
    menu.classList.remove('abrirMenu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrirMenu')
})

// fim do js do meu menu mobile (abrir e fechar)
