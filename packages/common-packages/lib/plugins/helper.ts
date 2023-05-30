export default defineNuxtPlugin(() => {
	console.log('helper')
	return {
		provide: {
			hello: (msg: string) => `Hello ${msg}!`
		}
	}
})
