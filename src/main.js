// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/home/Home.vue";
import Notes from "@/notes/Notes.vue";
import Counter from "@/counter/Counter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: Home, component: Home },
    { path: "/notes", name: Notes, component: Notes },
    { path: "/counter", name: Counter, component: Counter },
  ],
});

createApp(App).use(router).mount("#app");
