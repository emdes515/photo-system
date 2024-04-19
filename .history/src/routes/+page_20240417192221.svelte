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
		})

		lightbox.init()

		console.log(lightbox)
	})
</script>

<div class="grid grid-cols-4" id="gallery">
	{#each data.files as file}
		<a
			href={file['url']}
			target="_blank"
			rel="noreferrer"
			class="rati"
		>
			<img src={file['url']} alt="alt" />
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
