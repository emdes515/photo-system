<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'

	const defaultValue = ''
	const initialValue = browser ? window.localStorage.getItem('currentDir') : defaultValue

	const currentDir = writable(initialValue)

	currentDir.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('currentDir', value)
		}
	})

	export let data
</script>

<Navbar data={data.main} />

<Dirs dirs={data.main.directories} {currentDir} />

{{ ...currentDir }}

<Gallery images={{ name: 'Mateusz' }} />

<slot />
