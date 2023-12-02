function getRanNum(num = 20) {
	return Math.floor(Math.random() * num);
}

export function pickQuestion<T>(arr: Array<T>): T {
	const ranNum = getRanNum(arr.length);
	const pickedQuestion = arr[ranNum];
	arr.splice(ranNum, 1);
	return pickedQuestion;
}

// export function handleAnswer<T>(e: Event, question: T) {
// 	const el = e.target!;
// 	const correctButtonId = question.id + question.correctAnswer;
// 	const targetId = question.id + el.innerText;
//
// 	if (targetId !== correctButtonId) {
// 		el.classList.remove("bg-sp-dark-purple");
// 		el.classList.remove("btnx");
// 		el.classList.add("btn-error");
// 	}
//
// 	const buttons: HTMLButtonElement[] = el.parentElement.querySelectorAll(".btnx");
//
// 	buttons.forEach((button) => {
// 		if (question.id + button.innerText === correctButtonId) {
// 			// If the button is the correct answer, turn it green
// 			button.classList.remove("bg-sp-dark-purple");
// 			button.classList.add("btn-success");
// 		} else {
// 			// If the button is incorrect, hide it
// 			button.style.visibility = "hidden";
// 		}
// 	});
// }
//
// export function resetButton(e: Event) {
// 	const el = e.target!;
// 	el.classList.add("btnx");
// 	el.classList.remove("btn-error");
// 	const buttons: HTMLButtonElement[] = el.parentElement.querySelectorAll(".btnx");
// 	buttons.forEach((button) => {
// 		button.classList.add("bg-sp-dark-purple");
// 		button.classList.remove("btn-success");
// 		button.style.visibility = "visible";
// 	});
// }
