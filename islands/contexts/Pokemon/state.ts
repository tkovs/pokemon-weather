import { signal } from "@preact/signals";

export const city = signal("");
export const pokemon = signal<Partial<{ name: string; code: string }>>({});
export const raining = signal(false);
export const temp = signal(0);
export const loading = signal(false);
