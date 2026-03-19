async function carregarSaldo(){

const token = localStorage.getItem("token")

if(!token){
    window.location.href = "/pages/login/login.html"
    return
}

const response = await fetch("http://191.235.240.112:8000/saldo",{
headers:{
"Authorization": "Bearer " + token
}
})

if(!response.ok){
    console.log(await response.text())
    return
}

const data = await response.json()

document.getElementById("saldo").innerText =
new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BRL"
}).format(data.saldo)

}

carregarSaldo()