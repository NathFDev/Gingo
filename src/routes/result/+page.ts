import { score, questionCount, resetCount, resetScore } from "$lib/stores/score";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	const currentScore = get(score);
	const currentCount = get(questionCount);

	resetScore();
	resetCount();

	return {
		currentScore,
		currentCount
	};
};
