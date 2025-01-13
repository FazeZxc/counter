const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { height } = primaryDisplay.workAreaSize; 

  mainWindow = new BrowserWindow({ 
    frame: false,
    transparent: true, 
    resizable: false, 
    movable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
    },
  });

  const x = 0; 
  const y = height - 80; 
  mainWindow.setBounds({ x, y, width: 80, height: 100 }); 
  mainWindow.setAlwaysOnTop(true, "desktop");
  mainWindow.setVisibleOnAllWorkspaces(true); 

  mainWindow.loadFile("index.html");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
