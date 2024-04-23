<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'

	const defaultValue = '/'
	const initialValue = browser ? window.localStorage.getItem('currentDir') : defaultValue

	const currentDirs = writable(initialValue)

	currentDirs.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('currentDir', value)
		}
	})

	console.log($currentDirs)

	export let data

	console.log(data)
</script>

<Navbar {data} currentDir={currentDirs} />

<Dirs dirs={data.directories} currentDir={currentDirs} />

<Gallery images={{ name: 'Mateusz' }} />

<h2>{$currentDirs}</h2>

<slot />
