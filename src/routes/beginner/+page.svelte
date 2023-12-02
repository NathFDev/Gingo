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
	<div class="card lg:card-side bg-base-300 shadow-xl max-w-3xl mx-auto">
		<figure>
			<img class="max-h-80" src={question.image} alt="Question" />
		</figure>
		<div
			class="flex flex-col justify-between mx-auto my-2 items-center gap-6 p-4"
			on:click={handleClick}
		>
			{#each question.options as option}
				<button
					id={question.id}
					key={question.id}
					class="btn btnx bg-sp-dark-purple btn-wide text-white text-xl">{option}</button
				>
			{/each}
		</div>
	</div>
</div>
