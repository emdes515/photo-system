<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css'

	import Navbar from '../lib/Components/Navbar.svelte'
	import Gallery from '../lib/Components/Gallery.svelte'

	export let data
</script>

<Navbar />
<Gallery images={name: 'Mateusz'}/>

<slot />
