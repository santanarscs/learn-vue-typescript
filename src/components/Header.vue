<template>
  <nav
    class="w-full text-white px-4 py-4 bg-gradient-to-r from-blue-800 to-blue-600"
  >
    <router-link
      v-for="item of list"
      class="mx-2"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Dc Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" }
      ]
    };
  }
});
</script>
