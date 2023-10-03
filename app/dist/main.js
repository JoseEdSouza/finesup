"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require('path');
let win = null;
const createWindow = () => {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        "minHeight": 600,
        "minWidth": 800,
        "maxWidth": 1280,
        "maxHeight": 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.setMenuBarVisibility(false);
    win.loadFile("./lib/ui/pages/login/index.html");
};
const gotTheLock = electron_1.app.requestSingleInstanceLock();
if (!gotTheLock) {
    electron_1.app.quit();
}
else {
    electron_1.app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (win) {
            if (win.isMinimized())
                win.restore();
            win.focus();
        }
    });
    electron_1.app.whenReady().then(() => {
        createWindow();
        electron_1.app.on('activate', () => {
            if (electron_1.BrowserWindow.getAllWindows().length === 0)
                createWindow();
        });
    });
    electron_1.app.on('window-all-closed', () => {
        if (process.platform != 'darwin')
            electron_1.app.quit();
    });
}
