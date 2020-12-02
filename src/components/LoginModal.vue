<template>
  <section
    @click="close"
    class="z-20 w-screen h-screen bg-gray-300 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class=" z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center ">login</h1>
          <section class="mt-5 text-center">
            <button class="border px-2 rounded" @click="loginWithGoogle">
              Login with Google
            </button>
          </section>
          <p class="my-3 text-center">Or</p>
          <form @click.prevent="submit" class="p-2 my-2">
            <div class="my-4">
              <label>E-mail or username</label>
              <input
                ref="emailRef"
                v-model="email"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                v-model="password"
                class="rounded shadow p-2 w-full"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="my-4">
              <button
                class="
                  w-full 
                  text-white 
                  rounded 
                  shadow-md 
                  bg-gradient-to-r 
                  from-red-800
                  p-2
                  to-pink-600"
                type="submit"
              >
                <span v-if="isLoading">Loading....</span>
                <span v-else>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "../utils/firebase";
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  mounted() {
    (this.$refs["emailRef"] as HTMLElement).focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.close();
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => (this.isLoading = false));
    },
    close() {
      this.$emit("close-login");
    },
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.isLoading = true;
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.close();
        })
        .finally(() => (this.isLoading = false));
    }
  }
});
</script>

<style></style>
