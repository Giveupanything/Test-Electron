const { BrowserWindow, app } = require('electron');

const winInstance = new BrowserWindow({
  width: 500,
  height: 500,
  webPreferences: {
    preload: __dirname + '/preload.js'
  }
});

winInstance.loadURL('https://www.baidu.com');

const contents = winInstance.webContents;

console.log(contents, 'contents --->');

app.on('window-all-closed', () => {
  // win32、darwin、linux
  if(process.platform !== 'darwin') {
    app.quit();
  }
})
