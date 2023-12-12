<script lang="ts">
	import HandlingButton from "$lib/components/HandlingButton.svelte";
	import LoadingSpinner from "$lib/components/LoadingSpinner.svelte";
	import { addScore, addCount } from "$lib/stores/score";
	import type { beginner } from "$lib/utils/data";
	import { pickQuestion, toUnicode } from "$lib/utils/helper";
	import type { PageData } from "./$types";
	import { goto } from "$app/navigation";

	export let data: PageData;
	let question: beginner = pickQuestion(data.questions);
	let answer: Element | null;
	let loading: boolean = false;

	$: answered = !!answer as boolean;

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
				answer: toUnicode(answer!.textContent!.split(" ")[0].trim()),
				correctAnswer: toUnicode(question.correctAnswer.trim())
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

<div class="container mx-auto my-8 flex-grow">
	<h1 class="text-center text-2xl font-bold mb-8">Which kanji is correct for following image?</h1>
	{#if loading}
		<LoadingSpinner />
	{:else}
		<div class="card lg:card-side bg-base-300 shadow-xl max-w-3xl mx-auto">
			<figure>
				<img class="max-h-80" src={question.image} alt="Question" />
			</figure>
			<div
				class="flex flex-col justify-between mx-auto my-2 items-center gap-6 p-4"
				on:click={handleAnswer}
			>
				{#each question.options as option (option.option + question.id)}
					<button
						id={String(question.id)}
						class="btn bg-sp-dark-purple relative pt-4 btn-wide text-white text-xl"
					>
						{option.option}
						<span class="absolute top-1 text-xs">
							{option.yomikata}
						</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<HandlingButton handler={handleNext} {answered} />
