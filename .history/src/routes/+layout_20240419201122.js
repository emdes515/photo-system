/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const response = await fetch('http://localhost:3000/files')
	const data = await response.json()

	return data
}

function findSubdirectory(json, path) {
	const parts = path.split('/')
	let current = json

	for (const part of parts) {
		if (current.directories && current.directories[part]) {
			current = current.directories[part]
		} else {
			return null
		}
	}

	return current
}
