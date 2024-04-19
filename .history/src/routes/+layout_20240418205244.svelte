<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	export let data

	if (loca.getItem('currentDir')) {
		const currentDir = localStorage.getItem('currentDir')
		console.log('get form local')
	} else {
		const currentDir = ''
		localStorage.setItem('currentDir', currentDir)
		console.log('save to local')
	}
</script>

<Navbar />

<Dirs />

<Gallery images={{ name: 'Mateusz' }} />
