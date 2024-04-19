<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-cols-4">
	<div class="flex flex-col justify-end align-items-end text-center">
		<div></div>
		<img class="" src={folderIcon} alt="" />
		<span class="block">name</span>
	</div>
</div>
