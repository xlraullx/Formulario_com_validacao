const bntFormulario = document.getElementById('bnt')
const campoDeTexto = document.querySelectorAll('[name="campoDeTexto"]')

bntFormulario.addEventListener('click',() =>{
    campoDeTexto.forEach((campoDeTexto) =>{
        let campoPreenchido = campoDeTexto.value
        let errorText = campoDeTexto.nextElementSibling
        
        if(!(campoPreenchido)){
            campoDeTexto.style.borderColor = '#F52E2E'
            
            addTextoDeError(errorText)
        }else{
            campoDeTexto.style.borderColor = '#00C22B'

            removerTextoDeError(errorText)
        }
    })
})

function addTextoDeError(campoNaoPreenchido){
    campoNaoPreenchido.style.marginBottom = '6px'
    campoNaoPreenchido.innerHTML = 'campo obrigatório'
}

function removerTextoDeError(campoPreenchido){
    campoPreenchido.style.marginBottom = '15px'
    campoPreenchido.innerHTML = ''
    campoDeTexto[3].nextElementSibling.style.marginBottom = '5px'
}