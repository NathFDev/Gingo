import { resetScore } from "$lib/stores/score";
import type { expert } from "$lib/utils/data";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	resetScore();

	const res = await fetch("/questions?expert");
	const questions = (await res.json()) as expert[];

	return {
		questions
	};
};
