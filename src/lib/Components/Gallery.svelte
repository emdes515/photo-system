<script>
	import { onMount } from 'svelte'
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/style.css'

	export let images

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe'),
			wheelToZoom: true,
		})

		lightbox.init()
	})
</script>

<div class="pswp-gallery grid grid-cols-4 gap-2 m-4" id="gallery">
	{images.name}
	<!-- {#each data.files.files as image}
		<a
			href={image['url']}
			data-pswp-width={1000}
			data-pswp-height={1000 / (image.width / image.height)}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image['url']} alt="alt" loading="lazy" />
		</a>
	{/each} -->
</div>
