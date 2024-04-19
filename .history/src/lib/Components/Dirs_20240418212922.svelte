<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-cols-4">
	<div class="flex flex-col text-center">
		<img class="max-w-60" src={folderIcon} alt="" />
		<span class="my-[-10%]">name</span>
	</div>
</div>
