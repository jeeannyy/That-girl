export {};

declare global {
	interface Window {
		electronAPI: {
			quitApp: () => void;
		};
	}
}
