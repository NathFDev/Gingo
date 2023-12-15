import { score, questionCount, resetScore } from "$lib/stores/score";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	const currentScore = get(score);
	const currentCount = get(questionCount);

	resetScore();

	return {
		currentScore,
		currentCount
	};
};
