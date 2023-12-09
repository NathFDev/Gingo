<script lang="ts">
	import { goto } from "$app/navigation";
	import { questionCount } from "$lib/stores/score";

	export let handler: () => void;
	export let answered: boolean;

	let hadAnswer: boolean;
	questionCount.subscribe((i) => (hadAnswer = i < 1));
</script>

<footer
	class="footer items-center p-4 mt-16 rounded-tl-2xl rounded-tr-2xl bg-neutral text-neutral-content"
>
	<div class="flex justify-between w-full px-16">
		<button
			on:click={() => goto("/result")}
			disabled={hadAnswer}
			class="btn btn-large btn-wide btn-warning btn-outline text-3xl"
		>
			Finish
		</button>
		<button
			on:click={handler}
			disabled={!answered}
			class="btn btn-large btn-wide btn-primary btn-outline text-3xl"
		>
			Next
		</button>
	</div>
</footer>
