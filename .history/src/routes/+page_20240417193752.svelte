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

			mainClass: 'pswp-gallery',

			padding: { top: 20, bottom: 40, left: 100, right: 100 },
		})

		lightbox.init()

		console.log(lightbox)
	})
</script>

<div class="pswp-gallery grid grid-cols-4" id="gallery">
	{#each data.files as file}
		<a href={file['url']} target="_blank" rel="noreferrer">
			<img src={file['url']} alt="alt" loading="lazy" />
		</a>
	{/each}
</div>

<style>
	.pswp-gallery {
		--pswp-icon-color: #00fffc;
		--pswp-icon-color-secondary: #333;
	}
</style>
