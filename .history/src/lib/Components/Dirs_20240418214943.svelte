<script>
	import Folder from './Folder.svelte'
	import folderIcon from '../icons/icons8-folder-144.png'

	export let dirs
	export let currentDir
</script>

<div class="flex justify-start flex-wrap flex-grow">
	<Folder label={'test123'} path={'/test'} />
</div>
