/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	let toSend = {}

	const response = await fetch('http://localhost:3000/files')
	const data = await response.json()

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

	return data
}
