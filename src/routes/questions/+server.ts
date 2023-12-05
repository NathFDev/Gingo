import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { beginnerQuestions, intermediateQuestions, expertQuestions } from "$lib/utils/data";
import { pickQuestion } from "$lib/utils/helper";

export const GET: RequestHandler = ({ url }) => {
	const query = url.search;
	const param = query.slice(1);

	const questions =
		param === "beginner"
			? beginnerQuestions
			: param === "intermediate"
			  ? intermediateQuestions
			  : expertQuestions;

	const data = questions.slice();
	const question = pickQuestion(data);

	return json(question);
};

export const POST: RequestHandler = async ({ request }) => {
	const { answer, correctAnswer } = await request.json();
	return json(answer === correctAnswer);
};
