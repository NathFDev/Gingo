<script lang="ts">
	import HandlingButton from "$lib/components/HandlingButton.svelte";
	import { addScore, addCount } from "$lib/stores/score";
	import type { intermediate } from "$lib/utils/data";
	import { fetchQuestion } from "$lib/utils/helper";
	import type { PageData } from "./$types";

	export let data: PageData;
	let question: intermediate = data.question;
	let answer: Element;
	let loading: boolean = false;

	const handleAnswer = (e: MouseEvent) => {
		const target = e.target! as Element;
		if (!target.classList.contains("btn")) return;

		if (answer) {
			answer.classList.remove("border-solid", "border-4", "border-[#9400ff]");
		}
		answer = target;

		target.classList.add("border-solid", "border-4", "border-[#9400ff]");
	};

	const handleNext = async () => {
		addCount();
		loading = true;
		const res = await fetch("/questions", {
			method: "POST",
			body: JSON.stringify({
				answer:
					answer.textContent!.trim().charAt(0).toLowerCase() + answer.textContent!.trim().slice(1),
				correctAnswer: String(question.correctAnswer).trim()
			}),
			headers: {
				"content-type": "application/json"
			}
		});

		question = await fetchQuestion("intermediate");
		loading = false;

		const correct = await res.json();

		if (!correct) return;
		addScore();
	};
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-2xl font-bold mb-8">Which one is correct statement?</h1>
	{#if loading}
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<span class="loading loading-spinner loading-lg loading-primary"></span>
		</div>
	{:else}
		<div class="card w-96 bg-base-300 text-neutral-content shadow-xl mx-auto">
			<div class="card-body">
				<h2 class="text-2xl font-bold mb-8 text-center align-middle">{question.question}</h2>
				<div class="flex flex-col gap-4 justify-center items-center" on:click={handleAnswer}>
					<button class="btn btn-wide btn-success text-xl">True</button>
					<button class="btn btn-wide btn-error text-xl">False</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<HandlingButton handler={handleNext} />
