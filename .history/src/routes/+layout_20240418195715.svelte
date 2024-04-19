<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'
	import Gallery from '../lib/Components/Gallery.svelte'

	import Navbar from '../lib/Components/Navbar.svelte'

	export let data
</script>

<Navbar />
<Gallery /

<slot />
