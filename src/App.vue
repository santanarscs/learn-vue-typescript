<template>
  <Header @open-login-modal="isOpenLogin = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isOpenLogin" @close-login="isOpenLogin = false" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import LoginModal from "./components/LoginModal.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    LoginModal
  },
  data() {
    return {
      isOpenLogin: false
    };
  }
});
</script>
