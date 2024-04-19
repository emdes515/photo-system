<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirName
	export let dirPath
	export let currentDir

	let mainDivClases = 'flex flex-col text-center hover:cursor-pointer'

	const folderClickHandler = () => {
		currentDir.set(dirPath)
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
	<span class="block my-[-10%]">{dirName}</span>
</div>
