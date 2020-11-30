<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ herosCount }}</h1>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
        <div>{{ hero.name }}</div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded py-2 px-2"
        v-model="newHero"
        type="text"
        placeholder="Type Hero name here"
      />
      <button
        class="border rounded bg-gradient-to-t from-red-700 to-pink-700 text-white py-2 px-2"
        type="submmit"
      >Add Hero</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Hero {
  name: string;
}
interface Props {
  newHero: string;
  dcheros: Hero[];
}
export default defineComponent({
  name: "DcHeros",
  data<Props>() {
    return {
      newHero: "",
      dcHeros: [{ name: "Super man" }]
    };
  },
  computed: {
    herosCount(): number {
      return this.dcHeros.length;
    }
  },
  methods: {
    addHero(): void {
      if (this.newHero !== "") {
        this.dcHeros.push({ name: this.newHero });
      }
      this.newHero = "";
    },
    remove(index: number): void {
      this.dcHeros = this.dcHeros.filter(
        (hero: Hero, i: number) => i !== index
      );
    }
  }
});
</script>
