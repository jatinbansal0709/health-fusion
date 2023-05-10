const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}



const form = document.getElementById("formAuthentication")

form.addEventListener("submit",(event) => {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if(email && password.length > 7){
        const users = JSON.parse(localStorage.getItem("accounts"))

        if(users != null){
            let auth = false
            users.forEach(user => {
                if((user.email == email) || (user.username == email)){
                    if(user.password == password){
                        auth = true
                        localStorage.setItem("currentUser",JSON.stringify(user))
                    }
                }
            })
            if(auth){
                window.location.href = "dashboard.html";
            }else{
                alert(' Hey User !! It seem\'s that Username or password is incorrect !!', 'danger')
            }
        }else{
            return
        }
    }else{
        return
    }
})
