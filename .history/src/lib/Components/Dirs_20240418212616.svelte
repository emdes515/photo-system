<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-cols-4">
	<div class="flex text-center">
		<img src={folderIcon} alt="" />
		<span class="block">name</span>
	</div>
</div>
