<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 11 : Les formulaires avec Vee-validate et Zod</h2>
      <div class="lesson">
        <h3>Leçon 72 : Introduction à VeeValidate</h3>
        <!-- <input @blur="handleChange" type="text" v-model="usernameValue" />
        <p v-if="usernameError">{{ usernameError }}</p>
        <pre>{{ usernameValue }}</pre> -->
      </div>
      <div class="lesson">
        <h3>Leçon 73 : Introduction à Zod</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 74 : Valeurs initiales et handlechange()</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 75 : Validations croisées et asynchrones</h3>
        <form>
          <div>
            <input
              v-model="passwordValue"
              type="password"
              placeholder="Mot de passe"
            />
            <input
              v-model="validatePasswordValue"
              @blur="handleBlur"
              type="password"
              placeholder="Vérifier le mot de passe"
            />
          </div>
          <p v-if="confirmPasswordError">{{ confirmPasswordError }}</p>
          <!-- <div>
            <input v-model="emailValue" type="email" placeholder="Email" />
          </div>
          <p v-if="emailError">{{ emailError }}</p> -->
        </form>
      </div>
      <div class="lesson">
        <h3>Leçon 76: L'objet meta</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 77 : Les setters</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 78 : Soumission du formulaire</h3>
        <form action="" @submit="onSubmit">
          <input type="text" />
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div class="lesson">
        <h3>Leçon 79 : Autres options lors de l'envoi d'un formulaire</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 80 : Formatage des données</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 81 : Ajout dynamique de champs</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
// import { computed } from 'vue';
// const validationSchema = z.object({
//   username: z
//     .string()
//     .min(1, { message: 'le champ est obligatoire' })
//     .min(3, { message: 'le champ doit contenir au moins 3 caractères' })
//     .max(20, { message: 'le champ doit contenir au plus 20 caractères' }),
// })
// // const validationListeners = computed(() => {
// //   if (!errorMessage.value) {
// //     return {
// //       blur: handleChange,
// //       change: handleChange,
// //       input: (e) => handleChange(e, false),
// //     };
// //   }
// // });
// useForm({
//   validationSchema: toTypedSchema(validationSchema),
//   initialValues: {
//     username: 'John Doe',
//   },
// })

// const {
//   value: usernameValue,
//   errorMessage: usernameError,
//   handleChange,
// } = useField('username', { validateOnValueUpdate: false });

// console.log(usernameValue, usernameError)
//======================================================================================
//============   Leçon 75 : Validations croisées et asynchrones ========================
//======================================================================================

// const promise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(false)
//   }, 3000)
// })

const validationSchema = z
  .object({
    password: z.string(),
    validatePassword: z.string(),
    // email: z
    //   .string()
    //   .refine(async () => await promise, { message: 'Email non valide' }),
  })
  .refine(data => data.password === data.validatePassword, {
    path: ['validatePassword'],
    message: 'Les mots de passe ne correspondent pas',
  })

useForm({
  validationSchema: toTypedSchema(validationSchema),
})

const { value: passwordValue } = useField('password')
const {
  value: validatePasswordValue,
  handleBlur,
  errorMessage: confirmPasswordError,
} = useField('validatePassword', { validateOnValueUpdate: false })
// const { value: emailValue, errorMessage: emailError } = useField('email')

//======================================================================================
//============   Leçon 78 : Soumission du formulaire ========================
//======================================================================================

const { handleSubmit } = useForm()
const onSubmit = handleSubmit(
  values => {
    console.log(values)
    // Envoi des valeurs au serveur…
  },
  ({ values, errors, results }) => console.log(values, errors, results)
)
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

<!--
<template>
  <div>
    <input v-model="value" type="text" />
    <p style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'Champ obligatoire';
}
const { errorMessage, value } = useField('nomDuChamp', isRequired);
</script>

<style scoped lang="scss"></style> -->

<!--
<template>
  <div>
    <input name="email" v-model="email" />
    <p>{{ emailError }}</p>
    <input name="password" v-model="password" type="password" />
    <p>{{ passwordError }}</p>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';

const validationSchema = {
  email(value) {
    if (value.includes('@') && value.length > 5) {
      return true;
    } else {
      return 'Email non valide';
    }
  },
  password(value) {
    if (value?.length >= 8) {
      return true;
    } else {
      return 'Le mot de passe doit être de 8 caractères au moins';
    }
  },
};
useForm({ validationSchema });

const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
</script>

<style scoped lang="scss"></style>
 -->
