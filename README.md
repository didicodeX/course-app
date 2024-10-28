# style

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Les directives `v-once` et `v-memo` en Vue.js

## La directive `v-once`

La directive `v-once` permet de rendre un élément une seule fois et de ne plus le mettre à jour ensuite.

Autrement dit, après le premier rendu par **Vue.js**, les éléments sur lesquels sont appliqués la directive `v-once` sont considérés comme étant du contenu statique.

Cette directive permet d'optimiser les performances, par exemple sur un composant contenant des composants étant mis à jour très souvent et d'autres composants n'ayant pas besoin d'être mis à jour.

### Exemple :
```html
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
<enfant1></enfant1>
```

## La directive `v-memo`

La directive `v-memo` est assez proche de la logique de computed() : elle permet de suivre des dépendances et de mettre à jour un ou plusieurs éléments du DOM uniquement si ces dépendances sont modifiées.

### Exemple :
```html
<div v-memo="[valeurA, valeurB, valeurC]">
  ...
</div>
<enfant1></enfant1>
```
