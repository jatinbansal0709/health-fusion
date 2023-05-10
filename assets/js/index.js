
const currentUser = JSON.parse(localStorage.getItem("currentUser"))
const logout = document.getElementById("logoutbtn")

if(currentUser != null){
    const collection = document.getElementsByClassName("username")
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = `${currentUser.username}`
      }
}   

const firstNameInputBox = document.getElementById("firstNameInputBox")
if(firstNameInputBox){
    firstNameInputBox.value = `${currentUser.username}`
}

logout.addEventListener("click" , e => {
    e.preventDefault()
    localStorage.removeItem("currentUser")
    window.location.href = "auth-login-basic.html"
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
