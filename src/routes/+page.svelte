<script>
	import { onMount } from 'svelte'
	import lightGallery from 'lightgallery'
	import lgThumbnail from 'lightgallery/plugins/thumbnail'
	import lgZoom from 'lightgallery/plugins/zoom'

	export let data

	let gallery

	onMount(() => {
		lightGallery(gallery, {
			thumbnail: true,
		})
	})
</script>

<div
	bind:this={gallery}
	id="animated-thumbnails-gallery"
	class="gallery-container grid grid-cols-3 gap-3 m-2"
>
	{#each data.files as url}
		<a href={url}>
			<img src={url} alt="a" />
		</a>
	{/each}
</div>
