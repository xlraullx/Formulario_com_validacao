const bntFormulario = document.getElementById('bnt')
const campoDeTexto = document.querySelectorAll('[name="campoDeTexto"]')

bntFormulario.addEventListener('click',(e) =>{
    campoDeTexto.forEach((campoDeTexto) =>{
        let campoPreenchido = campoDeTexto.value
        let errorText = campoDeTexto.nextElementSibling
        
        if(campoPreenchido){
            campoDeTexto.classList.remove('campo-invalido')
            campoDeTexto.classList.add('campo-valido')

            errorText.classList.remove('mostrar')
        }else{
            campoDeTexto.classList.remove('campo-valido')
            campoDeTexto.classList.add('campo-invalido')

            errorText.classList.add('mostrar')
        }
    }) 
    
    let camposvalidos = document.querySelectorAll('.campo-valido')

    if(camposvalidos.length === campoDeTexto.length){
        return
    }else{
        e.preventDefault()
    }
    
})