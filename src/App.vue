<template>
  <Header />
  <div class="w-full flex">
    <DcHeros />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import DcHeros from "./components/DcHeros.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    DcHeros
  }
});
</script>

<style>
</style>
