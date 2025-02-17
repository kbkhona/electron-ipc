const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('myAPI', {
//     triggerNetflix: (username, password) => ipcRenderer.send("triggerNetflix", [username, password]),
//     addTaskHandler: addTask_Handler,
//     // deleteTaskHandler: deleteTask_Handler
// })

ipcRenderer.on("receiveNewTask", handleTaskInsertion)

function handleTaskInsertion(e, taskName) {
    console.log("in handleTaskInsertion", taskName)
    let newListItem = document.createElement("li")
    let deleteButton = document.createElement("button")
    let buttonContent = document.createTextNode("Delete Task");
    deleteButton.appendChild(buttonContent);
    let newContent = document.createTextNode(taskName);
    newListItem.appendChild(newContent);
    newListItem.appendChild(deleteButton);
    // deleteButton.addEventListener("click", )
    let unOrderedList = document.getElementById("listOfTasks")
    unOrderedList.appendChild(newListItem)
}