import { createRouter, createWebHistory } from 'vue-router'
import Playground from '../views/Playground.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Playground",
      component: Playground,
    },
  ]
});

export default router;
