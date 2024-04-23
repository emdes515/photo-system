<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'
	import Dirs from '../lib/Components/Dirs.svelte'

	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'

	function findSubdirectory(json, path) {
		const parts = path.split('/')
		let current = json

		for (const part of parts) {
			if (current.directories && current.directories[part]) {
				current = current.directories[part]
			} else {
				return null
			}
		}

		return current
	}

	const defaultValue = '/'
	const initialValue = browser ? window.localStorage.getItem('currentDir') : defaultValue

	const currentDirs = writable(initialValue)

	currentDirs.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('currentDir', value)
		}
	})

	export let data

	$: findSubdirectory(data, 'a/b')
</script>

<Navbar {data} {currentDirs} />

<Dirs dirs={data.directories} {currentDirs} />

<Gallery images={{ name: 'Mateusz' }} />

<h2>{$currentDirs}</h2>

<slot />
