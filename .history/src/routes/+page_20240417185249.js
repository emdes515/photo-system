/** @type {import('./$types').PageLoad} */


export async function load() {
	let toSend = {}

	await fetch('http://localhost:3000/files')
		.then((response) => response.json())
		.then((files) => {
			toSend = { files }
		})
		.catch((error) => console.error('Wystąpił błąd:', error))

		console.log(toSend);

	return toSend
}


