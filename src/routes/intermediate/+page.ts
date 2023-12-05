import type { intermediate } from "$lib/utils/data";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch("/questions?intermediate");
	const question = (await res.json()) as intermediate;

	return {
		question
	};
};
