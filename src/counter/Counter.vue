<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold underline">Basic counter app</h1>
    <p>{{ count }}</p>
    <button @click="count--">Decrement</button>
    <button @click="count++">increment</button>
  </header>
</template>
