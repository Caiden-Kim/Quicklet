import { createRouter, createWebHashHistory } from "vue-router";
import SetsPage from "@/pages/SetsPage.vue";
import FlashcardsPage from "@/pages/FlashcardsPage.vue";
import QuizPage from "@/pages/QuizPage.vue";

const router = createRouter({
  history: createWebHashHistory(), // HASH MODE
  routes: [
    { path: "/", component: SetsPage },
    { path: "/flashcards/:id", component: FlashcardsPage, props: true },
    { path: "/quiz/:id", component: QuizPage, props: true },
  ],
});

export default router;
