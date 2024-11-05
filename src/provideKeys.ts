import type { InjectionKey } from "vue"
import type { MangakaInterface } from "./views/AvanceesComposant.vue"

export const mangakaKey = Symbol() as InjectionKey<{
  mangaka: MangakaInterface,
  updateBirthday: () => void
}>
