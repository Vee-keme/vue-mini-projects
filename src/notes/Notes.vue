<script setup>
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const errorMessage = ref("");

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = "Note must be at least 10 characters long");
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor(),
  });
  newNote.value = "";
  showModal.value = false;
  errorMessage.value = "";
};
</script>

<template>
  <main class="h-screen w-screen">
    <div
      v-if="showModal"
      class="absolute w-full h-full bg-slate-950/75 z-10 flex items-center justify-center"
    >
      <div
        class="w-[750px] bg-white rounded-lg p-[30px] relative flex flex-col"
      >
        <textarea
          v-model.trim="newNote"
          class="outline outline-2 outline-slate-400"
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Enter your note here..."
        ></textarea>

        <p v-if="errorMessage" class="text-red-700">{{ errorMessage }}</p>
        <button
          @click="addNote"
          class="py-[10px] px-[20px] text-3xl w-[100%] bg-blue-700 border-none text-white cursor-pointer mt-[15px] rounded"
        >
          Add Note
        </button>

        <button
          @click="showModal = false"
          class="py-[10px] px-[20px] text-3xl w-[100%] bg-red-700 border-none text-white cursor-pointer mt-[15px] rounded"
        >
          Close
        </button>
      </div>
    </div>
    <div class="max-w-[1000px] p-[10px] my-0 mx-auto">
      <header class="flex justify-between items-center">
        <h1 class="font-bold mb-[25px] text-5xl">Notes</h1>
        <button
          @click="showModal = true"
          class="flex items-center justify-center border-none p-[10px] w-[50px] h-[50px] cursor-pointer bg-slate-900 rounded-full text-white text-3xl"
        >
          +
        </button>
      </header>
      <div class="flex flex-wrap">
        <div
          v-for="note in notes"
          :key="note.id"
          :style="{ backgroundColor: note.backgroundColor }"
          class="w-[225px] h-[225px] p-5 rounded flex flex-col justify-between mr-[20px] mb-[20px]"
        >
          <p>{{ note.text }}</p>
          <p class="text-sm font-bold">
            {{ note.date.toLocaleDateString("en-US") }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
