<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-10 w-42 h-10 overflow-x-scroll"
        style="direction:rtl; overflow: hidden;"
      >
        {{ currentNum }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded">
          1
        </button>
        <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded">
          2
        </button>
        <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded">
          3
        </button>
        <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded">
          +
        </button>
        <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded">
          4
        </button>
        <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded">
          5
        </button>
        <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded">
          6
        </button>
        <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded">
          -
        </button>
        <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded">
          7
        </button>
        <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded">
          8
        </button>
        <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded">
          9
        </button>
        <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded">
          *
        </button>
        <button @click="pressed('c')" class="p-2 w-10 h-10 border rounded ">
          C
        </button>
        <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded ">
          0
        </button>
        <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded">
          =
        </button>
        <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded">
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref<string>("");
    const prevNum = ref<string>("");
    const selectedOperation = ref<string>("");

    const multiply = () => {
      currentNum.value = String(+prevNum.value * +currentNum.value);
    };
    const divide = () => {
      currentNum.value = String(+prevNum.value / +currentNum.value);
    };
    const subtract = () => {
      currentNum.value = String(+prevNum.value - +currentNum.value);
    };
    const sum = () => {
      currentNum.value = String(+prevNum.value + +currentNum.value);
    };

    const calculate = () => {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      else if (selectedOperation.value === "-") subtract();
      else if (selectedOperation.value === "+") sum();

      prevNum.value = "";
      selectedOperation.value = "";
    };

    const applyOperation = (value: string) => {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    };
    const apprendNumber = (value: string) => {
      currentNum.value = currentNum.value + value;
    };

    const clear = () => {
      currentNum.value = "";
      prevNum.value = "";
      selectedOperation.value = "";
    };

    const pressed = (value: string) => {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) apprendNumber(value);
    };

    const handleKeydown = (e: KeyboardEvent) => pressed(e.key);

    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    });
    return { currentNum, pressed, selectedOperation, prevNum };
  }
};
</script>

<style></style>
