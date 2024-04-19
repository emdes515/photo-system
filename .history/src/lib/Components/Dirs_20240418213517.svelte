<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="grid grid-cols-6 w-full justify-center align-items-center">
	<div class="flex flex-col max-w-[192px] text-center">
		<img src={folderIcon} alt="" />
		<span class="block my-[-10%]">name</span>
	</div>
</div>
