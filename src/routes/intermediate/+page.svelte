<script lang="ts">
	import HandlingButton from "$lib/components/HandlingButton.svelte";
	import LoadingSpinner from "$lib/components/LoadingSpinner.svelte";
	import { addScore, addCount } from "$lib/stores/score";
	import type { intermediate } from "$lib/utils/data";
	import { pickQuestion } from "$lib/utils/helper";
	import type { PageData } from "./$types";
	import { goto } from "$app/navigation";

	export let data: PageData;
	let question: intermediate = pickQuestion(data.questions);
	let answer: Element | null;
	let loading: boolean = false;

	$: answered = !!answer as boolean;

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
					answer!.textContent!.trim().charAt(0).toLowerCase() +
					answer!.textContent!.trim().slice(1),
				correctAnswer: String(question.correctAnswer).trim()
			}),
			headers: {
				"content-type": "application/json"
			}
		});

		const correct = await res.json();

		if (correct) addScore();

		answer = null;

		if (data.questions.length < 1) {
			goto("/result");
			return;
		}

		question = pickQuestion(data.questions);
		loading = false;
	};
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-2xl font-bold mb-8">Which one is correct statement?</h1>
	{#if loading}
		<LoadingSpinner />
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

<HandlingButton handler={handleNext} {answered} />
