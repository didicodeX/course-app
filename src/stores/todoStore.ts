import type { Todo } from "@/interfaces/todo.interface";
import { defineStore } from "pinia";

export interface TodoState{
  todos: Todo[];
}

export const useTodos = defineStore('todos', {
  state: (): TodoState => ({
    todos: [],
  }),
  getters: {
    todoList(state: TodoState): Todo[] {
      return state.todos;
    }
  },
  actions: {
    addTodo(content: string): void {
      this.todos.push({
        content: content,
        done: false,
        editMode: false
      });
    },
    toggleDone(index: number): void {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index: number): void {
      this.todos.splice(index, 1);
    },
    editTodo(index: number, edit:Partial<Todo>): void {
      this.todos[index] = { ...this.todos[index], ...edit };

    }
  }
});
