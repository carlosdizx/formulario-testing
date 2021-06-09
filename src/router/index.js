import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Formularios from "../views/Formularios";
import FormularioUno from "../components/FormularioUno";
import FormularioDos from "../components/FormularioDos";
import FormularioTres from "../components/FormularioTres";

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
  },
  {
    path: "/forms/1",
    name: "FormularioUno",
    component: FormularioUno
  },
  {
    path: "/forms/2",
    name: "FormularioDos",
    component: FormularioDos
  },
  {
    path: "/forms/3",
    name: "FormularioTres",
    component: FormularioTres
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
