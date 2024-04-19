/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	let toSend = {}

	await fetch('http://localhost:3000/files')
		.then((response) => response.json())
		.then((files) => {
			toSend = { files }
		})
		.catch((error) => console.error('Wystąpił błąd:', error))

	console.log(toSend)

	let data

	const stored = localStorage.content

	const storage = writable(stored || '')

	storage.subscribe((value) => (localStorage.content = value))

	return toSend
}
