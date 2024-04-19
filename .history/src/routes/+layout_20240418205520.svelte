<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'
	import { writable } from 'svelte/store'

	export let data

	const stored = localStorage.getItem

	export const storage = writable(stored || '')

	storage.subscribe((value) => (localStorage.content = value))
</script>

<Navbar />

<Dirs />

<Gallery images={{ name: 'Mateusz' }} />
