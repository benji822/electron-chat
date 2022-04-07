const {app, BrowserWindow, Notification} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "White",
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    const notification = new Notification({
        title: 'Hello Electron',
        body: 'Welcome to Electron to create native desktop application'
    })
    notification.show()
})

app.on("window-all-closed", () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})