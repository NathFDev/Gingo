import { json } from "@sveltejs/kit";
import { expertQuestions } from "$lib/utils/data";
import { pickQuestion } from "$lib/utils/helper";

export function GET() {
	const data = expertQuestions.slice();

	const question = pickQuestion(data);

	return json(question);
}
