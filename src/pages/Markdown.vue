<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center my-4 text-3xl">Markdown app</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :value="text"
          @input="update"
          ref="markDownRef"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import marked from "marked";
import debounce from "../utils/mixins/debounce";

export default defineComponent({
  name: "Markdown",
  mixins: [debounce],

  mounted() {
    this.$refs["markDownRef"].focus();
  },
  data() {
    return {
      text: ""
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    }
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
    debounce(func, wait = 1000) {
      clearTimeout(+this.timeout);
      this.timeout = String(setTimeout(func, wait));
    }
  }
});
</script>

<style></style>
