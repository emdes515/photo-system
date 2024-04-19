<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-flow-col">
	<div class="flex flex-col justify-center align-items-center w-100">
		<div><img class="max-w-48" src={folderIcon} alt="" /></div>
		<div><span>name</span></div>
	</div>
</div>
