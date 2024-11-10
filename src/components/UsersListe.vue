<template>
  <div>
    <ul class="users">
      <li class="user" v-for="user of state.users" :key="user._id">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.createdAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface User {
  name: string
  email: string
  createdAt: string
  _id?: string
}

const state = reactive<{ users: User[] }>({
  users: [],
})

// async function fetchUsers() {
// state.users = await(await fetch('https://restapi.fr/api/users')).json();
// }
// fetchUsers();

state.users = await (await fetch('https://restapi.fr/api/users')).json()

//=========================================================
</script>

<style scoped lang="scss">
.users {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .user {
    background-color: #f1f1f1;
    padding: 10px 12px;
    width: 250px;
    border-radius: 5px;
    cursor: pointer;
    p {
      color: #333;
    }
    button {
      margin-left: auto;
    }
  }
}
</style>
