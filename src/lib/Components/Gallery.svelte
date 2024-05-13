<script context="module">
	export const ssr = false
</script>

<script>
	import { onMount } from 'svelte'
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/style.css'
	import { addToCart, removeFromCart } from '/src/store.js'
	import { writable, derived } from 'svelte/store'

	export let images

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe'),
			wheelToZoom: true,
		})

		// lightbox.on('uiRegister', function () {
		// 	lightbox.pswp.ui.registerElement({
		// 		name: 'add-to-cart',
		// 		order: 8,
		// 		isButton: true,
		// 		tagName: 'a',

		// 		// SVG with outline
		// 		html: '<svg width="512" height="512" viewBox="0 0 512 512" style="color:#ffffff" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="#ffffff" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></g></svg></svg>',

		// 		// Or provide full svg:
		// 		// html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="pswp__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

		// 		// Or provide any other markup:
		// 		// html: '<i class="fa-solid fa-download"></i>'

		// 		onInit: (el, pswp) => {
		// 			el.setAttribute('download', '')
		// 			el.setAttribute('target', '_blank')
		// 			el.setAttribute('rel', 'noopener')

		// 			pswp.on('change', () => {
		// 				console.log('change')
		// 				el.href = pswp.currSlide.data.src
		// 			})
		// 		},
		// 	})
		// })

		lightbox.init()
	})

	if (images.files == null || Object.keys(images.files).length === 0) {
		images.files = []
	}
	function clickPlusHandler(image) {
		let updatedImage = { ...image, isInCart: !image.isInCart }
		let index = images.files.indexOf(image)
		images.files[index] = updatedImage

		let isInCart = updatedImage.isInCart

		isInCart ? addToCart(updatedImage) : removeFromCart(updatedImage)
	}

	export const searchTerm = writable('')

	export const filteredImages = derived([searchTerm, images], ([$searchTerm, $images]) =>
		$images.files.filter((image) =>
			image.metadata.keywords.some((keyword) =>
				keyword.toLowerCase().includes($searchTerm.toLowerCase())
			)
		)
	)
</script>

<div class="pswp-gallery grid grid-cols-4 gap-2 m-4" id="gallery">
	{#each images.files as image}
		<div class="relative">
			<a
				href={image.url}
				data-pswp-width={1000}
				data-pswp-height={1000 / (image.width / image.height)}
				target="_blank"
				rel="noreferrer"
			>
				<img class="lazyload" src={image['url']} alt="alt" loading="lazy" />
			</a>
			<div
				on:click={() => clickPlusHandler(image)}
				class="absolute bottom-1 right-1 btn btn-circle btn-default border-2 border-black"
			>
				{#if image.isInCart}
					<svg
						width="512"
						height="512"
						viewBox="0 0 512 512"
						style="color:#1C2033"
						xmlns="http://www.w3.org/2000/svg"
						class="h-full w-full"
						><rect
							width="512"
							height="512"
							x="0"
							y="0"
							rx="30"
							fill="transparent"
							stroke="transparent"
							stroke-width="0"
							stroke-opacity="100%"
							paint-order="stroke"
						></rect><svg
							width="256px"
							height="256px"
							viewBox="0 0 24 24"
							fill="#1C2033"
							x="128"
							y="128"
							role="img"
							style="display:inline-block;vertical-align:middle"
							xmlns="http://www.w3.org/2000/svg"
							><g fill="#1C2033"
								><path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-width="2"
									d="M20 12H4"
								/></g
							></svg
						></svg
					>
				{:else}
					<svg
						width="512"
						height="512"
						viewBox="0 0 512 512"
						style="color:currentColor"
						xmlns="http://www.w3.org/2000/svg"
						class="h-full w-full"
						><rect
							width="512"
							height="512"
							x="0"
							y="0"
							rx="30"
							fill="transparent"
							stroke="transparent"
							stroke-width="0"
							stroke-opacity="100%"
							paint-order="stroke"
						></rect><svg
							width="256px"
							height="256px"
							viewBox="0 0 24 24"
							fill="currentColor"
							x="128"
							y="128"
							role="img"
							style="display:inline-block;vertical-align:middle"
							xmlns="http://www.w3.org/2000/svg"
							><g fill="currentColor"
								><path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-width="2"
									d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
								/></g
							></svg
						></svg
					>
				{/if}
			</div>
		</div>
	{/each}
</div>
