import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

require('electron-reload')(__dirname, {
	electron: require(`${__dirname}/../node_modules/electron`),
});

ipcMain.on('quit-app', () => {
	app.quit();
});

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 650,
		height: 700,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			contextIsolation: true,
			nodeIntegration: false,
		},
	});

	mainWindow.loadFile(path.join(__dirname, '../renderer/dist/index.html'));

	mainWindow.once('ready-to-show', () => {
		const bounds = mainWindow!.getBounds();
	});
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
