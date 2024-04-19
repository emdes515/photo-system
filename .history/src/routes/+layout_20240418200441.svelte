<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	export let data

	const currentDir = localStorage.getItem('currentDir') || './'
</script>

<Navbar />

<Dirs />

<Gallery images={{ name: 'Mateusz' }} />
