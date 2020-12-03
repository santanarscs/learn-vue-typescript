import { onMounted, onUnmounted } from "vue";
export default function useWindowsEvent(event: string, handleEvent: any) {
  onMounted(() => {
    window.addEventListener(event, handleEvent);
  });
  onUnmounted(() => {
    window.removeEventListener(event, handleEvent);
  });
}
