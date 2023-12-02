<script lang="ts">
	import { pickQuestion } from "$lib/utils/helper.ts";
	import type { PageData } from "./$types";

	export let data: PageData;

	function createBatch() {
		const leftArr = [];
		const rightArr = [];

		for (let i = 0; i < 4; i++) {
			const pair = pickQuestion(data.questions);
			leftArr.push(pair);
			rightArr.push(pair);
		}

		leftArr.sort(() => Math.random() - 0.5);
		rightArr.sort(() => Math.random() - 0.5);

		return [leftArr, rightArr];
	}

	let [kanjiOption, hiraganaOption] = createBatch();
	let kanji;
	let hiragana;
	let answeredQuestions = [];
	let answeredCount = 0;

	const handleClick = (e: Event) => {
		if (!e.target.classList.contains("btn")) return;
		if (e.target.classList.contains("kanji")) kanji = e.target;
		else hiragana = e.target;
		if (!kanji || !hiragana) return;
		if (kanji.id === hiragana.id) {
			kanji.style.visibility = "hidden";
			hiragana.style.visibility = "hidden";
			answeredQuestions.push(kanji);
			answeredQuestions.push(hiragana);
			answeredCount++;
			kanji = "";
			hiragana = "";
		} else {
			kanji.classList.remove("bg-sp-dark-purple");
			kanji.classList.add("btn-error");
			hiragana.classList.remove("bg-sp-dark-purple");
			hiragana.classList.add("btn-error");
			setTimeout(() => {
				kanji.classList.add("bg-sp-dark-purple");
				kanji.classList.remove("btn-error");
				hiragana.classList.add("bg-sp-dark-purple");
				hiragana.classList.remove("btn-error");
				kanji = "";
				hiragana = "";
			}, 500);
		}
		console.log(answeredCount);
		if (answeredCount % 4 === 0 && answeredCount > 0) {
			[kanjiOption, hiraganaOption] = createBatch();
			answeredCount = 0;
			for (let i = 0; i < answeredQuestions.length; i++) {
				answeredQuestions[i].style.visibility = "visible";
			}
		}
	};
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-2xl font-bold mb-8">Which one is the correct pair?</h1>
	<div
		class="card lg:card-side bg-base-300 shadow-xl max-w-3xl mx-auto flex justify-between items-center gap-6"
	>
		<div
			class="flex flex-col justify-between mx-auto my-2 items-center gap-6 p-4"
			on:click={handleClick}
		>
			{#each kanjiOption as option}
				<button
					key={option.id}
					id={option.id}
					class="kanji btn bg-sp-dark-purple btn-wide text-white text-xl">{option.kanji}</button
				>
			{/each}
		</div>
		<div
			class="flex flex-col justify-between mx-auto my-2 items-center gap-6 p-4"
			on:click={handleClick}
		>
			{#each hiraganaOption as option}
				<button
					key={option.id}
					id={option.id}
					class="hiragana btn bg-sp-dark-purple btn-wide text-white text-xl"
					>{option.hiragana}</button
				>
			{/each}
		</div>
	</div>
</div>
