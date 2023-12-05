import type { expert } from "$lib/utils/data";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch("/questions?expert");
	const question = (await res.json()) as expert;

	return {
		question
	};
};
