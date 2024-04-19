/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	let toSend = {}

	await fetch('http://localhost:3000/files')
		.then((response) => response.json())
		.then((main) => {
			toSend = { main }
		})
		.catch((error) => console.error('Wystąpił błąd:', error))

	console.log(toSend)

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

	// Przykładowe użycie:
	const subdirectory = findSubdirectory(toSend, '/a')

	if (subdirectory) {
		console.log(subdirectory)
	} else {
		console.log('Podkatalog nie został znaleziony')
	}

	return toSend
}
