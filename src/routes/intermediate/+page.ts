import { intermediateQuestions } from "$lib/utils/data";

export function load() {
	const questions = intermediateQuestions.slice();
	return {
		questions
	};
}
