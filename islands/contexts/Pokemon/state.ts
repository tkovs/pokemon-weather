import { signal } from "@preact/signals";

export const city = signal<string>("");
export const pokemon = signal<string>("");
export const raining = signal<boolean>(false);
export const temp = signal<number>(0);
