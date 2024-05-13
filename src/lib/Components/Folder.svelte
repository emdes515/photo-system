<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirName
	export let dirPath
	export let currentDirs
	export let folderID

	let mainDivClases = 'flex flex-col text-center hover:cursor-pointer'
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->

<a href={folderID}>
	<div role="button" tabIndex="0" class={mainDivClases}>
		<img src={folderIcon} alt="folder" />
		<span class="block my-[-10%]">{dirName}</span>
	</div>
</a>
