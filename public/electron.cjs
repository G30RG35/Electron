const { app, BrowserWindow } = require('electron')
const { join } = require ('path');


function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    fullscreen:"false",
    fullscreenable:"false",
  })

  win.loadFile(join(app.getAppPath(),'dist/index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})