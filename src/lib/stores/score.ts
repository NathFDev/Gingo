import { writable } from "svelte/store";

export const score = writable(0);
export const questionCount = writable(0);

export const addScore = () => {
	score.update((i) => i + 1);
};

export const resetScore = () => {
	score.set(0);
};

export const addCount = () => {
	questionCount.update((i) => i + 1);
};

export const resetCount = () => {
	questionCount.set(0);
};
