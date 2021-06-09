import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Formularios from "../views/Formularios";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/forms",
    name: "Formularios",
    component: Formularios
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
