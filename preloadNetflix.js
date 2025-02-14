const { ipcRenderer } = require('electron')

ipcRenderer.on('startAutomation', netFlixHandler)

const usernameXpath = "/html/body/div[1]/div/div/div/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div[2]/div/form/div/div/div/input";

function netFlixHandler(e, [name, password]) {
    console.log("in netflixHandler")
    console.log(name, password)    
}

