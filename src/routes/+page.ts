import { resetScore } from "$lib/stores/score";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	resetScore();
};
