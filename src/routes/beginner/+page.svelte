<script lang="ts">
	import HandlingButton from "$lib/components/HandlingButton.svelte";
	import { addScore, addCount } from "$lib/stores/score";
	import type { beginner } from "$lib/utils/data";
	import { fetchQuestion, toUnicode } from "$lib/utils/helper";
	import type { PageData } from "./$types";

	export let data: PageData;
	let question: beginner = data.question;
	let answer: Element;
	let loading: boolean = false;

	const handleAnswer = (e: MouseEvent) => {
		const target = e.target! as Element;
		if (!target.classList.contains("btn")) return;

		if (answer) {
			answer.classList.add("bg-sp-dark-purple");
			answer.classList.remove("btn-secondary");
		}
		answer = target;

		target.classList.remove("bg-sp-dark-purple");
		target.classList.add("btn-secondary");
	};

	const handleNext = async () => {
		addCount();
		loading = true;
		const res = await fetch("/questions", {
			method: "POST",
			body: JSON.stringify({
				answer: toUnicode(answer.textContent!.trim()),
				correctAnswer: toUnicode(question.correctAnswer.trim())
			}),
			headers: {
				"content-type": "application/json"
			}
		});

		question = await fetchQuestion("beginner");
		loading = false;

		const correct = await res.json();

		if (!correct) return;
		addScore();
	};
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-2xl font-bold mb-8">Which kanji is correct for following image?</h1>
	{#if loading}
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<span class="loading loading-spinner loading-lg loading-primary"></span>
		</div>
	{:else}
		<div class="card lg:card-side bg-base-300 shadow-xl max-w-3xl mx-auto">
			<figure>
				<img class="max-h-80" src={question.image} alt="Question" />
			</figure>
			<div
				class="flex flex-col justify-between mx-auto my-2 items-center gap-6 p-4"
				on:click={handleAnswer}
			>
				{#each question.options as option (option + question.id)}
					<button
						id={String(question.id)}
						class="btn bg-sp-dark-purple btn-wide text-white text-xl"
					>
						{option}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<HandlingButton handler={handleNext} />
