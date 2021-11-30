//Validação de usuário
var btnEnter = document.querySelector("#btn-enter")
var nome = document.querySelector("#nome")
var instituicao = document.querySelector("#instituicao")
var body = document.querySelector("body")

btnEnter.addEventListener("click", (event) => { 
    event.preventDefault()

    if(nome.value != "" && instituicao.value != ""){
        body.className = "enter-js"
    }else{
        if(nome.value == ""){
            nome.classList.add("errorInput")
        }else{
            nome.classList.remove("errorInput")
        }
    
        if(instituicao.value == ""){
            instituicao.classList.add("errorInput")
        }else{
            instituicao.classList.remove("errorInput")
        }
    }
})

//Escolha da prova
var btnRedes = document.querySelector(".btn-redes")
var btnAds = document.querySelector(".btn-ads")

btnRedes.addEventListener("click", () =>{
    window.location.href = "provaRedes.html"
    sessionStorage.setItem('nome', nome.value)
    sessionStorage.setItem('instituicao', instituicao.value)
})

btnAds.addEventListener("click", () =>{
    window.location.href = "provaAds.html"
    sessionStorage.setItem('nome', nome.value)
    sessionStorage.setItem('instituicao', instituicao.value)
})