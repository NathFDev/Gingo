<script lang="ts">
	import { pickQuestion, handleAnswer, resetButton } from "$lib/utils/helper.ts";
	import type { PageData } from "./$types";

	const handleClick = (e: Event) => {
		if (!e.target.classList.contains("btn")) return;
		handleAnswer(e, question);
		setTimeout(() => {
			question = pickQuestion(data.questions);
			resetButton(e);
		}, 1000);
	};

	export let data: PageData;
	let question = pickQuestion(data.questions);
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-2xl font-bold mb-8">Which kanji is correct for following image?</h1>
	<div class="mockup-window border bg-base-300 max-w-3xl mx-auto my-8">
		<div class="px-4 py-4 bg-base-200">{question.text}</div>
	</div>
	<div class="card lg:card-side bg-base-300 shadow-xl max-w-3xl mx-auto">
		<div class="grid grid-cols-2 gap-8 mx-auto p-4" on:click={handleClick}>
			{#each question.options as option}
				<button
					class="btn bg-sp-dark-purple btn-wide btnx text-white text-xl"
					id={question.id}
					key={question.id}>{option}</button
				>
			{/each}
		</div>
	</div>
</div>
