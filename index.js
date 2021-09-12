const { app, BrowserWindow, Tray, Menu } = require('electron')
const gotTheLock = app.requestSingleInstanceLock();

let window = null;
let tray = null;
let isQuiting = false;
if (!gotTheLock) {
    app.quit()
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (window !== null) {
            restoreHiddenWindow();
        }
    })
    app.on('before-quit', () => {
        isQuiting = true;
    });
    app.whenReady().then(startWindow).then(createTray)
}


function startWindow () {
    if (!window) {
        window = new BrowserWindow({
            webPreferences: {
                nativeWindowOpen: true
            },
            width: 800,
            height: 600,
            icon: 'build/icon.png'
        })
        window.setTitle('Protonmail Desktop')
        window.setMenuBarVisibility(false);
        window.maximize();
        window.loadURL('https://mail.protonmail.com/')


        window.on('minimize', (event) => {
            event.preventDefault();
            window.hide();
        })

        window.on('close', (event) => {
            if (!isQuiting) {
                event.preventDefault();
                window.hide();
                event.returnValue = false;
            }
        })
    }
}

function createTray() {
    tray = new Tray('build/icon.png');
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Restore', click: restoreHiddenWindow },
        { label: 'Quit', click: app.quit }
    ])

    tray.setContextMenu(contextMenu);
    tray.setToolTip('Protonmail Desktop');

    tray.on('click', () => {
        restoreHiddenWindow();
    })
}

function restoreHiddenWindow() {
    if (!window.visible) window.show();
    if (window.isMinimized()) window.restore();

    window.focus();
}