import { resetScore } from "$lib/stores/score";

export function load() {
	resetScore();

	return {
		Introduction: {
			title: "Introduction",
			content:
				"Hello and welcome to the Japanese Language Learning App, created by Nathan Farrel! This app is designed to help you learn Japanese in a fun and interactive way. You can choose from three different levels of difficulty: beginner, intermediate, and expert. Each level has its own features and challenges to suit your learning needs. To navigate, use the home button in the top left to return to the home page, and utilize the question mark button in the top right for page instructions. We hope you enjoy learning Japanese with this app!"
		},
		beginner: {
			title: "Beginner",
			content:
				"If you are new to Japanese, or want to review the basics, the Beginner Level is for you. Here, you will learn Japanese using images. You will be presented with a question and four possible answers. Choose the correct answer from the provided options. Once you make a selection, the correct answer will be revealed, and the question will automatically change to the next one. Try to answer as many questions as you can and improve your Japanese skills!"
		},
		intermediate: {
			title: "Intermediate",
			content:
				"After you have learned the basics of kanji, you can advance to the Intermediate Level, where you will test your knowledge of the Japanese characters. Kanji are complex symbols that represent meanings and sounds. You will be shown a kanji and a statement about its meaning and storkes count. Your task is to decide whether the statement is true or false. Upon making your selection, the question will dynamically change, ensuring a varied learning experience. Additionally, the correct answer will be displayed after your choice. Challenge yourself and learn more kanji!"
		},
		expert: {
			title: "Expert",
			content:
				"Are you ready for the ultimate challenge? The Expert Level will test your Japanese comprehension and vocabulary by reading carefully crafted story texts. You will be given a short story in Japanese, followed by a series of questions based on the provided information. You will have to choose the correct answer from the given options. Notably, the questions will evolve as you select answers, offering a dynamic challenge. Furthermore, correct answers will be revealed to enhance your learning experience. You can also check your score and progress on the top right corner. Enjoy the stories and sharpen your Japanese skills!"
		}
	};
}
