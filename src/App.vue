<template>
  <Header />
  <div class="w-full flex">
    <Calendar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
// import DcHeros from "./components/DcHeros.vue";
import Calendar from "./components/Calendar.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Calendar
  }
});
</script>

<style>
</style>
