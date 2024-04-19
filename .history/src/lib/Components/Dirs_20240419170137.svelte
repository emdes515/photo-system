<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir

	const arrOfCurrentDirsName = Object.keys(dirs).map((key) => [key, dirs[key]['path']])
	console.log(arrOfCurrentDirsName)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsName as dirName, aas}
		<h1>{aas}</h1>
	{/each}
</div>
