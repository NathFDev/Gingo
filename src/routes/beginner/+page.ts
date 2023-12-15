import { resetScore } from "$lib/stores/score";
import type { beginner } from "$lib/utils/data";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	resetScore();

	const res = await fetch("/questions?beginner");
	const questions = (await res.json()) as beginner[];

	return {
		questions
	};
};
