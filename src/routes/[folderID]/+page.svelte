<script>
	/** @type {import('./$types').PageData} */

	import Navbar from '/src/lib/Components/Navbar.svelte'
	import Dirs from '/src/lib/Components/Dirs.svelte'
	import Gallery from '/src/lib/Components/Gallery.svelte'

	export let data

	console.log(data.folderData)
</script>

<Navbar {data} />

<Dirs
	dirs={data.folderData.directories}
	currentDirs={data.folderData.path}
	currentDirsJSON={data.folderData}
/>

<Gallery images={data.folderData} />
