<script>
	import folderIcon from '../icons/icons8-folder-144.png'

	export let label
	export let path

	let mainDivClases = 'flex flex-col text-center hover:cursor-pointer'
</script>

<div class={mainDivClases} on:click={() => {}}>
	<img src={folderIcon} alt="" />
	<span class="block my-[-10%]">{label}</span>
</div>
