<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 12 : HTTP</h2>
      <div class="lesson">
        <h3>Leçon 82 : Introduction et requête AJAX</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 83 : Requêtes POST</h3>
        <div class="container">
          <div>
            <h3>Formulaire</h3>
            <form action="" @submit="mySubmit">
              <input
                ref="name"
                v-model="nameValue"
                type="text"
                placeholder="name"
              />
              <input v-model="emailValue" type="email" placeholder="email" />
              <div class="buttons">
                <button>Save</button>
                <button @click="clear">Clear</button>
              </div>
            </form>
          </div>
          <div>
            <h3>Liste des utilisateurs</h3>
            <ul class="users">
              <li
                @click="state.selectedUser = user"
                class="user"
                v-for="user in state.users"
                :key="user._id"
              >
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
                <p>{{ user.createdAt }}</p>
                <button @click.stop="deleteUser(user._id)">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lesson">
        <h3>Leçon 84 : Requêtes GET et DELETE</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 85 : Requêtes PATCH</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { reactive, watch, ref, onMounted } from 'vue'

interface User {
  name: string
  email: string
  createdAt: string
  _id?: string
}

const state = reactive<{ users: User[]; selectedUser: User | null }>({
  users: [],
  selectedUser: null,
})

const name = ref<HTMLInputElement | null>(null)

onMounted(() => {
  name.value?.focus()
})
console.log(state)

const { handleSubmit } = useForm()
const mySubmit = handleSubmit(async (value, { resetForm }) => {
  if (!value.name || !value.email) return
  try {
    if (state.selectedUser) {
      const response = await fetch(
        `https://restapi.fr/api/users/${state.selectedUser._id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(value),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const user = await response.json()
      // state.users = state.users.map(user =>user._id === state.selectedUser?._id ? { ...user, ...value } : user,)
      state.users = state.users.map(user =>
        user._id === state.selectedUser?._id ? { ...user } : user,
      )
      state.selectedUser = null
      resetForm()
      console.log(user)
      return
    } else {
      const response = await fetch('https://restapi.fr/api/users', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const user = await response.json()
      state.users.push(user)
      resetForm()
      console.log(user)
    }
  } catch (error) {
    console.error(error)
  }
  name.value?.focus()
})

const { value: nameValue } = useField('name')
const { value: emailValue } = useField('email')

async function fetchUsers(url: string) {
  try {
    // const response = await fetch(url)
    // const users: User | User[] = await response.json()
    const users: User | User[] = await (await fetch(url)).json()
    if (Array.isArray(users)) {
      state.users = users
    } else {
      state.users.push(users)
      // state.users = [users]
    }
  } catch (error) {
    console.error(error)
  }
}

fetchUsers('https://restapi.fr/api/users')

async function deleteUser(id?: string) {
  try {
    const response = await fetch(`https://restapi.fr/api/users/${id}`, {
      method: 'DELETE',
    })
    const user = await response.json()
    state.users = state.users.filter(user => user._id !== id)
    console.log(user)
  } catch (error) {
    console.error(error)
  }
}

watch(
  () => state.selectedUser,
  (user: User | null) => {
    if (user) {
      nameValue.value = user.name
      emailValue.value = user.email
    } else {
      nameValue.value = ''
      emailValue.value = ''
    }
  },
)

function clear() {
  nameValue.value = ''
  emailValue.value = ''
  state.selectedUser = null
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

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

li {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.buttons {
  margin-left: auto;
  display: flex;
  gap: 12px;
}
</style>

<!--
   try{
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  } catch (error) {
    console.error(error);
  }
-->
