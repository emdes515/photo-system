<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-cols-4">
	<div class="flex flex-col justify-center align-items-center">
		<img class="max-w-48" src={folderIcon} alt="" />
		<span class="block">name</span>
	</div>
</div>
