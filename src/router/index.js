import { createRouter, createWebHashHistory } from "vue-router";
import SetsPage from "../SetsPage.vue";
import FlashcardsPage from "../FlashcardsPage.vue";
import QuizPage from "../QuizPage.vue";

const routes = [
  { path: "/", component: SetsPage },
  { path: "/flashcards/:id", component: FlashcardsPage, props: true },
  { path: "/quiz/:id", component: QuizPage, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
