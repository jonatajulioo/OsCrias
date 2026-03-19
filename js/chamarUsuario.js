async function carregarUsuario(){

const token = localStorage.getItem("token")

const response = await fetch("http://191.235.240.112:8000/me",{
headers:{
"Authorization": "Bearer " + token
}
})

const user = await response.json()

document.getElementById("nome").innerText = user.nome
document.getElementById("email").innerText = user.email

}

carregarUsuario()