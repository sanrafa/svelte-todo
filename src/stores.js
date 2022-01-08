import { writable } from "svelte/store";

export const name = writable("");

export const todos = writable([]);

export const toEdit = writable({});
