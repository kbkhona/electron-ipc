function clickHandler() {
    console.log("in clickhandler")
    let name = document.getElementById("username").value
    let pass = document.getElementById("password").value
    window.myAPI.triggerNetflix(name, pass)
}

document.getElementById("enter").addEventListener("click", clickHandler)
