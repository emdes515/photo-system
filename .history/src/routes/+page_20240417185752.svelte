<script>
	import { onMount } from 'svelte'
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/style.css'
	export let data

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: 'gallery',
			children: 'a',
			pswpModule: () => import('photoswipe'),
		})
		lightbox.init()

		console.log(data.files)
	})
</script>

{#each data.files as file}
	{(url = file['path'])}
	<a href={file['path']}>
		<img src={file['path']} alt="alt" />
	</a>
{/each}

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
