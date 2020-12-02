<template>
  <Header :isLoggedIn="isLoggedIn" @open-login-modal="isOpenLogin = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal v-if="isOpenLogin" @close-login="isOpenLogin = false" />
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utils/firebase";
export default defineComponent({
  name: "App",
  components: {
    Header,
    LoginModal
  },
  data() {
    return {
      isOpenLogin: false,
      isLoggedIn: false,
      authUser: {}
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  }
});
</script>
