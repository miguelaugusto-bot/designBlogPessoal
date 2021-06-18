/*var - variavel global/ se for referenciado pode ser usado em todo o escopo
let - variavel local
const - variavel que não pode ser alterado
*/

/*
case sensitive

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = window.document.querySelector('#email')
let nomeOK = false
let emailOK = false



function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 1){
        txtNome.innerHTML = 'Precisa de um nome'
        txtNome.style.display = 'block'
    }else{
        txtNome.style.display = 'none'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 && email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Precisa de um email'
        txtEmail.style.display = 'block'
    }else{
        txtEmail.style.display = 'none'
        emailOK = true
    }
}

function login(){
    if(nomeOK == true && emailOK == true){
        alert('tudo okay')
    }else{
        alert('esta faltando algo')
    }
}
