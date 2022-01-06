import { writable } from "svelte/store";

export const name = writable("");

if (sessionStorage.getItem("name")) name.set(sessionStorage.getItem("name"));

export const todos = writable([]);
