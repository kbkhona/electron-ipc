const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = (pathToPreload) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, pathToPreload)
    }
  })
  return win
}

app.whenReady().then(() => {
  let win = createWindow('preloadMain.js')
  win.loadFile('index.html')
  ipcMain.on("triggerNetflix", handleNetflixAutomation)
})

async function handleNetflixAutomation(e, [name, password]) {
  console.log("in handleNetflixAutomation")
  let netFlixWindow = createWindow('preloadNetflix.js')
  let wc = netFlixWindow.webContents
  netFlixWindow.loadURL('https://www.netflix.com/in');
  wc.openDevTools();
  wc.on('did-finish-load', () => {
    wc.send('startAutomation', [name, password])
  }) 
}

// async function set_input_text(selector, data, wc) {
//   console.log(data);
//   await wc
//     .executeJavaScript(`document.evaluate('${selector}', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.value = '${data}'`)
//     .then((result) => console.log("setInputSuccess"))
//     .catch((err) => {
//       console.log("******error in setInput*******", err);
//       throw err;
//     });
// }