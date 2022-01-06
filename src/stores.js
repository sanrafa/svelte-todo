import { writable } from "svelte/store";

export const name = writable("");

if (sessionStorage.getItem("name")) name.set(sessionStorage.getItem("name"));

export const todos = writable([]);

if (sessionStorage.getItem("todos") !== "null")
  todos.set(JSON.parse(sessionStorage.getItem("todos")));
