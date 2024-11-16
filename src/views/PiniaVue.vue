<template>
  <div class="p-20 d-flex justify-content-center">
    <div class="card">
      <h1 class="mb-20">Todo List</h1>
      <div class="d-flex align-items-center">
        <input v-model="input" type="text" class="flex-fill mr-20" />
        <button @click="addTodo" class="btn btn-primary mr-20">Ajouter</button>
      </div>
      <ul class="todos">
        <li v-for="(todo, index) in todos" :key="todo.content">
          <div
            v-if="!todo.editMode"
            class="d-flex align-items-center todo"
            @click="toggleDone(index)"
          >
            <input :checked="todo.done" type="checkbox" />
            <span>{{ todo.content }} </span>
            <div class="button">
              <button @click.stop="editTodo(index, { editMode: true })">
                Edit
              </button>
              <button @click.stop="deleteTodo(index)">Supprimer</button>
            </div>
          </div>
          <div v-else>
            <TodoForm
              :content="todo.content"
              @cancel="editTodo(index, { editMode: false })"
              @update="editTodo(index, { editMode: false, content: $event })"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodos } from '@/stores/todoStore'
import type { Todo } from '@/interfaces/todo.interface'
import TodoForm from '@/components/TodoForm.vue'
const input = ref<string>('')

const todoStore = useTodos()
const todos = todoStore.todoList

console.log(todoStore.todoList)

function addTodo() {
  todoStore.addTodo(input.value)
  input.value = ''
}

function deleteTodo(index: number) {
  todoStore.deleteTodo(index)
}

function toggleDone(index: number) {
  todoStore.toggleDone(index)
}

function editTodo(index: number, edit: Partial<Todo>) {
  todoStore.editTodo(index, edit)
}
</script>

<style lang="scss">
.card {
  width: 500px;
  margin-bottom: 200px;
}
.todos {
  margin-top: 20px;
  display: grid;
  gap: 10px;
}

.todo {
  display: flex;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 68px;
}

.button {
  margin-left: auto;

  button {
    margin-left: 10px;
    height: 40px;
  }
}
</style>
