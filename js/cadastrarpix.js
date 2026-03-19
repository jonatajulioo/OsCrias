async function criarPix(){

const tipo = document.getElementById("tipo").value
let chave = document.getElementById("chave").value
const token = localStorage.getItem("token")

const response = await fetch("http://191.235.240.112:8000/criar_pix",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer " + token
},
body:JSON.stringify({tipo,chave})
})

const data = await response.json()

document.getElementById("resultado").innerText = data.message || data.detail

}
