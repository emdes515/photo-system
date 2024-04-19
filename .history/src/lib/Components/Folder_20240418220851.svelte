<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let label
	export let path

	let mainDivClases = 'flex flex-col text-center hover:cursor-pointer'

	const folderClickHandler = () => {}
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div role="button" tabIndex={0} class={mainDivClases} on:click={folderClickHandler}>
	<img src={folderIcon} alt="folder" />
	<span class="block my-[-10%]">{label}</span>
</div>
