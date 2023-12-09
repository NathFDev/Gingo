function getRanNum(num: number) {
	return Math.floor(Math.random() * num);
}

export function fetchQuestions<T>(arr: Array<T>): Array<T> {
	const copyArr = arr.slice();
	const newArr = [];

	for (let i = 0; i < 10; i++) {
		const ranNum = getRanNum(copyArr.length);
		newArr.push(copyArr[ranNum]);
		copyArr.splice(ranNum, 1);
	}

	return newArr;
}

export function pickQuestion<T>(arr: Array<T>): T {
	const ranNum = getRanNum(arr.length);
	const pickedQuestion = arr[ranNum];
	arr.splice(ranNum, 1);
	return pickedQuestion;
}

export function toUnicode(str: string) {
	return str
		.split("")
		.map(function (value) {
			let temp = value.charCodeAt(0).toString(16).toUpperCase();
			while (temp.length < 4) {
				temp = "0" + temp;
			}
			return "\\u" + temp;
		})
		.join("");
}
