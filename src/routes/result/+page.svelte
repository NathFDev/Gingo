<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	const noAnswer = data.currentCount === 0;

	const totalScore = noAnswer ? 0 : Math.round((data.currentScore / data.currentCount) * 100);
</script>

<div class="container mx-auto my-8 flex flex-col justify-center items-center">
	<div
		class="radial-progress text-primary text-4xl mb-8"
		style="--value:{totalScore}; --size: 16rem; --thickness: 1.5rem"
		role="progressbar"
	>
		{totalScore}%
	</div>
	{#if noAnswer}
		<h1 class="text-white text-3xl font-bold mb-8">You haven't answer any question yet</h1>
	{:else}
		<h1 class="text-white text-3xl font-bold mb-8">
			You've answered correctly {data.currentScore} out of {data.currentCount}
		</h1>
	{/if}
	<a href="/" class="btn btn-neutral text-neutral-content btn-wide btn-large text-xl">Home</a>
</div>
