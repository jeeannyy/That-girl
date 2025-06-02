console.log('🔥 preload loaded!'); // ← 첫 줄에 추가!

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	quitApp: () => ipcRenderer.send('quit-app'),
});
