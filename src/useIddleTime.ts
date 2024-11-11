import { onMounted, onUnmounted, ref } from 'vue'

export function useIddleTime() {
  const secondes = ref(0)
  const totalIddleTime = ref(0)

  setInterval(() => {
    secondes.value++;
  }, 1000);

  function mousemove() {
    totalIddleTime.value += secondes.value;
    secondes.value = 0;
  }

  onMounted(() => window.addEventListener('mousemove', mousemove))
  onUnmounted(() => window.removeEventListener('mousemove', mousemove))

  return { secondes, totalIddleTime }
}
