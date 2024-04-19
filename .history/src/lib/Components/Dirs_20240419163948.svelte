<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir
</script>

<div class="flex justify-start flex-wrap flex-grow">
	<Folder label={'test123'} path={'/test'} {currentDir} />
</div>
