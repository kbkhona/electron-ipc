function clickHandler() {
    console.log("in clickhandler")
    let name = document.getElementById("username").value
    let pass = document.getElementById("password").value
    window.myAPI.triggerNetflix(name, pass)
}

document.getElementById("enter").addEventListener("click", clickHandler)

document.getElementById("addtask_button").addEventListener("click", window.myAPI.addTaskHandler)

// document.getElementById("deletetask_button").addEventListener("click", window.myAPI.deleteTaskHandler)