


function calcIMC() {
    let nome = document.querySelector('.Cname').value
    let altura = document.querySelector('.Caltura').value
    let peso = document.querySelector('.Cpeso').value
    let resultado = peso / (altura*altura)
    let exibe = document.querySelector('#idR')
    const imc = resultado.toFixed(2)
   
    if(nome !== '' && altura !== '' && peso !== '') {
        if(imc < 19) {
        exibe.value =  exibe.innerHTML = `${nome}, seu imc e: ${imc}, ta frango em pai, bora treinar!!!`

    } 

    else if(imc > 19.1 && imc < 24.9 ) {
        exibe.value =  exibe.innerHTML = `${nome}, seu imc e: ${imc} parabens seu peso esta normal!`

    }
    
    else if(imc > 25) {
        exibe.value =  exibe.innerHTML = `${nome}, seu imc e: ${imc} ta gordinho em pai, bora treinar!!!`

    }
    } else{
        exibe.value = "prencha todos os campos"
    }
    

}