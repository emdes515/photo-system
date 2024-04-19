<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	import { writable } from 'svelte/store'
		import { browser } from '$app/environment';

	const defaultValue = ''

	const initialValue = browser ?
</script>

<Navbar />

<Dirs />

<Gallery images={{ name: 'Mateusz' }} />
