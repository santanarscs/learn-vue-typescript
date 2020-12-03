import { ref } from "vue";
export default function useDebounce() {
  const timeout = ref<number>();

  function debounce(func: any, wait = 1000) {
    clearTimeout(timeout.value);
    timeout.value = setTimeout(func, wait);
  }
  return { debounce };
}
