<script lang="ts">
	export let handler: () => void;
</script>

<footer
	class="footer items-center p-4 mt-16 rounded-tl-2xl rounded-tr-2xl bg-neutral text-neutral-content"
>
	<div class="flex justify-between w-full px-16">
		<a href="/result" class="btn btn-large btn-wide btn-warning btn-outline text-3xl"> Finish </a>
		<button on:click={handler} class="btn btn-large btn-wide btn-primary btn-outline text-3xl">
			Next
		</button>
	</div>
</footer>
