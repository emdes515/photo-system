<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-flow-col">
	<div class="flex flex-col">
		<img class="block max-w-10" src={folderIcon} alt="" />
		<span class="block">name</span>
	</div>
</div>
