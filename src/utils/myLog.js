export default function myLog(...messages) {
	if (process.env.NODE_ENV !== 'production') {
		console.log(...messages);
	}
}
