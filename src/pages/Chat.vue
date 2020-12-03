<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            type="text"
            v-model="state.message"
            placeholder="Start Typing..."
            class="p-1 border rounded shadow"
            @click.enter="addMessage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase from "../utils/firebase";
export default {
  setup() {
    const state = reactive({
      chats: {},
      message: "",
      collection: null,
      userId: null
    });
    onMounted(async () => {
      const db = firebase.database();
      state.collection = db.ref("chats");
      const data = await state.collection.once("value");
      state.chats = data.val();
      state.collection.on("child_added", snapshot => {
        state.chats = snapshot.val();
      });

      state.userId = firebase.auth().currentUser.uid;
    });
    const addMessage = () => {
      const newChat = state.collection.push();

      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    };
    return { state, addMessage };
  }
};
</script>

<style></style>
