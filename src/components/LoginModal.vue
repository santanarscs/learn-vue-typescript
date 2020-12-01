<template>
  <section
    @click="$emit('close-login')"
    class="z-20 w-screen h-screen bg-gray-300 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class=" z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center ">login</h1>
          <form @click.prevent="submit" class="p-2 my-2">
            <div class="my-4">
              <label>E-mail or username</label>
              <input
                v-model="form.email"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                v-model="form.password"
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      console.log("alskjd");
    }
  }
});
</script>

<style></style>
