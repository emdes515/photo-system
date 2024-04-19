<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let label
	export let path
</script>

<a href=""
	><div class="flex flex-col text-center hover:cursor-pointer">
		<img src={folderIcon} alt="" />
		<span class="block my-[-10%]">{label}</span>
	</div>
</a>
