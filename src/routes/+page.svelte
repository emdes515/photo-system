<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	export let data

	const currentPath = '/'
</script>

<Navbar {data} currentDirs={data.directories} />

<Dirs dirs={data.directories} currentDirs={data.path} currentDirsJSON={data} />

<Gallery images={data} />
