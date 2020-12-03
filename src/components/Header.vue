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
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "../utils/firebase";
export default defineComponent({
  props: {
    isLoggedIn: { type: Boolean, required: true }
  },
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Dc Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reusable-modal" },
        { title: "Chat", to: "/chat" }
      ]
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
});
</script>
