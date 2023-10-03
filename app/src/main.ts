import { app, BrowserWindow } from "electron"
const path = require('path')

let win: BrowserWindow | null = null

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        "minHeight":600,
        "minWidth":800,
        "maxWidth":1280,
        "maxHeight":720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.setMenuBarVisibility(false)
    win.loadFile("./lib/ui/pages/login/index.html");
};


const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
    app.quit()
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (win) {
            if (win.isMinimized()) win.restore()
            win.focus()
        }
    })

    app.whenReady().then(() => {
        createWindow()
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0)
                createWindow()
        })
    })

    app.on('window-all-closed', () => {
        if (process.platform != 'darwin')
            app.quit()
    })
}



