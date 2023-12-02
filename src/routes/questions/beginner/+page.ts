import { json } from "@sveltejs/kit";
import { beginnerQuestions } from "$lib/utils/data";
import { pickQuestion } from "$lib/utils/helper";

export function GET() {
	const data = beginnerQuestions.slice();

	const question = pickQuestion(data);

	return json(question);
}
