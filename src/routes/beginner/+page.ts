import type { beginner } from "$lib/utils/data";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch("/questions?beginner");
	const question = (await res.json()) as beginner;

	return {
		question
	};
};
