<script>
	import { onMount } from 'svelte'
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/style.css'
	export let data

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe'),
			arrowPrev: true,
			arrowNext: true,
			zoom: true,
			close: true,
			counter: true,

			initialZoomLevel: 'fit',
			secondaryZoomLevel: 2,
			maxZoomLevel: 4,

			mainClass: 'pswp'
		})

		lightbox.init()

		console.log(lightbox)
	})
</script>

<div class="pgallswp- grid grid-cols-4" id="gallery">
	{#each data.files as file}
		<a href={file['url']} target="_blank" rel="noreferrer">
			<img src={file['url']} alt="alt" loading="lazy" />
		</a>
	{/each}
</div>

<!-- <div
	bind:this={gallery}
	id="animated-thumbnails-gallery"
	class="gallery-container grid grid-cols-3 gap-3 m-2"
>
	{#each data.files as url}
		<a href={url}>
			<img src={url} alt="a" />
		</a>
	{/each}
</div> -->
