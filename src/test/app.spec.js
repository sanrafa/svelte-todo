import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/svelte";

describe("App", () => {
  it("Should present user with name input upon fresh visit", () => {
    expect(1).toEqual(2);
  });

  it("Should display current user name upon submission/retrieval", () => {
    expect(1).toEqual(2);
  });

  describe("Welcome", () => {
    it("Allows user to submit name and save to store/localStorage", () => {
      expect(1).toEqual(2);
    });
  });

  it("Should contain a component allowing user to add/edit items", () => {
    expect(1).toEqual(2);
  });

  describe("TodoForm", () => {
    it("By default, allows user to add new item to todo list", () => {
      expect(1).toEqual(2);
    });

    it("If user goes to edit todo, should populate with text and submit button becomes edit button", () => {
      expect(1).toEqual(2);
    });
    it("Should NOT add or update todo if no text input given", () => {
      expect(1).toEqual(2);
    });
    it("Should update todo list in localStorage upon adding/deleting item", () => {
      expect(1).toEqual(2);
    });
  });

  it("Should contain a component that lists existing items", () => {
    expect(1).toEqual(2);
  });

  describe("Todos", () => {
    it("Should list all existing todo items", () => {
      expect(1).toEqual(2);
    });
    it("Allows user to reorder todo items on list", () => {
      expect(1).toEqual(2);
    });
    it("Should populate with todo list in localStorage upon page visit, if it exists", () => {
      expect(1).toEqual(2);
    });
  });

  describe("SingleTodo", () => {
    it("Should display todo text as it exists in localStorage", () => {
      expect(1).toEqual(2);
    });
    it("Should contain edit/delete buttons which perform associated actions", () => {
      expect(1).toEqual(2);
    });
  });

  it("Should retrieve user data (name, todos) from localStorage, if it exists", () => {
    expect(1).toEqual(2);
  });
});
