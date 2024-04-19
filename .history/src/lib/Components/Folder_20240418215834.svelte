<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let label
	export let path

	let mainDivClases = 'flex flex-col text-center hover:cursor-pointer'
</script>

<button class={mainDivClases} on:click={() => {}}>
	<img class="w-full" src={folderIcon} alt="" />
	<span class="block my-[-10%]">{label}</span>
</button>
