<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re usable modal</h1>
      <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
        <template #title>
          Red modal
        </template>
        <template #body>
          <p>Content red modal</p>
        </template>
      </Modal>
      <button @click="isRedModalOpen = true" class="border px-2 rounded">
        Open Red modal
      </button>

      <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
        <template #title>
          Blue modal
        </template>
        <template #body>
          <p>Content blue modal</p>
        </template>
      </Modal>
      <button @click="isBlueModalOpen = true" class="border px-2 rounded">
        Open Blue modal
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import Modal from "../components/Modal.vue";
export default defineComponent({
  components: { Modal },
  setup() {
    const isRedModalOpen = ref(true);
    const isBlueModalOpen = ref(true);
    return { isRedModalOpen, isBlueModalOpen };
  }
});
</script>

<style></style>
