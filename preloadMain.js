const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    triggerNetflix: (username, password) => ipcRenderer.send("triggerNetflix", [username, password]),
    addTaskHandler: addTask_Handler,
    // deleteTaskHandler: deleteTask_Handler
})

function addTask_Handler() {
    console.log("in addTask_Handler")
    let taskInput = document.getElementById("task_name").value;
    if(!taskInput) return
    ipcRenderer.send("addTaskToRenderer", taskInput)
}

// function deleteTask_Handler() {
//     console.log("in deleteTaskHandler")

// }