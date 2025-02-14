const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    triggerNetflix: (username, password) => ipcRenderer.send("triggerNetflix", [username, password])
})