
//meu codigo
// meu codigo esta melhro escrito, embora os dois tem a msm funcao o chat gpt acha o meu mais correto 

function addNewTask() {
  const lista = document.querySelector("#lista");
  let texto = document.querySelector("input").value // value pega a string do input(o texto digitado) por isso na hora de limpar ele devo colocar o input dodocumento nao a variavel que eu o armazenie

    if(texto.length === 0) {
        return alert("o texto precisa ter mais de 1 caractere")  // ira encerrar o codigo por aqui e exibir essa mensagem pos o texo esta muito pequeno pra ser exibido
    }
   
  let newLi = document.createElement("li")
  newLi.innerText = texto    //como essa nova lista esta sendo criada estantaniamente, nao posso mexer no css, ent adiciono uma class por aqui, assim:
  newLi.className = "classNewLi"

  lista.appendChild(newLi)
  
  document.querySelector('#taskName').value = ''
}






/*

// codigo do cara do yt

function addNewTask() {
    var list = document.querySelector("ul")
    var text = document.querySelector("input").value
    var listItem = document.createElement("li")

    if(text.length === 0 ) {
        return  alert("texto pracisa ter mais de 1 caractere")    }
    const textElement = document.createTextNode(text)
    listItem.appendChild(textElement)
    list.appendChild(listItem)

}


// meu codigo

function addNewTask() {
  const lista = document.querySelector("#lista");
  let texto = document.querySelector("input").value 
  let newLi = document.createElement("li")

  newLi.innerText = texto

  lista.appendChild(newLi)

}


function addNewTask() {
  var list = document.querySelector("ul")
  var text = document.querySelector("input").value
  var listItem = document.createElement("li")
  const textElement = document.createTextNode(text)
  listItem.appendChild(textElement)
  list.appendChild(listItem)

}

*/