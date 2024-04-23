/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	let toSend = {}

	const response = await fetch('http://localhost:3000/files')
	const data = await response.json()

	return data
}
