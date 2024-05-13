export const load = async ({ params, fetch }) => {
	const response = await fetch('http://localhost:3000/files')
	const data = await response.json()

	function findFolderById(data, id) {
		if (data.id === id) {
			return data
		}
		for (let key in data.directories) {
			let result = findFolderById(data.directories[key], id)
			if (result !== null) {
				return result
			}
		}
		return null
	}

	const folderInfo = {
		folderID: params.folderID,
		folderData: findFolderById(data, params.folderID),
	}

	return folderInfo
}
