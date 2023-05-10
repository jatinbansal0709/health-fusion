const form = document.getElementById("formAuthentication")


form.addEventListener("submit",(event) => {
    event.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if(username && email && password.length > 7){
        const users = JSON.parse(localStorage.getItem("accounts"))
        const user = [{
            "username": username,
            "email": email,
            "password": password
        }]
        if(users != null){
            let exist = false
            users.forEach(user => {
                if(user.email == email){
                    exist = true
                }
            })
            if(!exist){
                const newUsers = [...users, ...user]
                localStorage.setItem("accounts",JSON.stringify(newUsers))
            }
        }else{
            const newUsers = [...user]
            localStorage.setItem("accounts",JSON.stringify(newUsers))
        }
        window.location.href = "auth-login-basic.html";
    }else{
        return
    }
})
