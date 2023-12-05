<script lang="ts">
	import HandlingButton from "$lib/components/HandlingButton.svelte";
	import LoadingSpinner from "$lib/components/LoadingSpinner.svelte";
	import { addScore, addCount } from "$lib/stores/score";
	import type { expert } from "$lib/utils/data";
	import { fetchQuestion, toUnicode } from "$lib/utils/helper";
	import type { PageData } from "./$types";

	export let data: PageData;
	let question: expert = data.question;
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

		question = await fetchQuestion("expert");
		loading = false;

		const correct = await res.json();

		if (!correct) return;
		addScore();
	};
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-2xl font-bold mb-8">Which one is correct based on the text?</h1>
	{#if loading}
		<LoadingSpinner />
	{:else}
		<div class="mockup-window border bg-base-300 max-w-3xl mx-auto my-8">
			<div class="px-4 py-4 bg-base-200">{question.text}</div>
		</div>
		<div class="card lg:card-side bg-base-300 shadow-xl max-w-3xl mx-auto">
			<div class="grid grid-cols-2 gap-8 mx-auto p-4" on:click={handleAnswer}>
				{#each question.options as option (option + question.id)}
					<button
						class="btn bg-sp-dark-purple btn-wide btnx text-white text-xl"
						id={String(question.id)}
					>
						{option}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<HandlingButton handler={handleNext} />
