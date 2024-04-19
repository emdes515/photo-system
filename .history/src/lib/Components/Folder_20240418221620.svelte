<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let label
	export let path
	export let currentDir

	let mainDivClases = 'flex flex-col text-center hover:cursor-pointer'

	const folderClickHandler = () => {
		currentDir = 'essa'
	}
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
<div
	role="button"
	tabIndex="0"
	class={mainDivClases}
	on:click={folderClickHandler}
	on:keypress={folderClickHandler}
>
	<img src={folderIcon} alt="folder" />
	<span class="block my-[-10%]">{label}</span>
</div>
