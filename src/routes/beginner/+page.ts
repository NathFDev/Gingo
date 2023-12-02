import { beginnerQuestions } from "$lib/utils/data";
import { fetchQuestions } from "$lib/utils/helper";

export function load() {
	const questions = fetchQuestions(beginnerQuestions);
	return {
		questions
	};
}
