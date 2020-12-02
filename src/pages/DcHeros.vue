<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
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
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-t from-red-700 to-pink-700 text-white py-2 px-2"
        type="submmit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

interface Hero {
  name: string;
}

export default defineComponent({
  name: "DcHeros",
  setup() {
    const newHero = ref<string>("");
    const newHeroRef = ref();
    const dcHeros = ref<Hero[]>([{ name: "Super man" }]);
    onMounted(() => {
      newHeroRef.value.focus();
    });

    const addHero = () => {
      if (newHero.value !== "") {
        dcHeros.value.push({ name: newHero.value });
      }
      newHero.value = "";
    };
    const remove = (index: number) => {
      dcHeros.value = dcHeros.value.filter(
        (hero: Hero, i: number) => i !== index
      );
    };

    const herosCount = computed(() => dcHeros.value.length);

    return { newHero, dcHeros, newHeroRef, herosCount, addHero, remove };
  }
});
</script>
