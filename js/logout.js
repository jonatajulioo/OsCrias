function logout(){

localStorage.removeItem("token")

window.location.href = "/pages/login/login.html"

}