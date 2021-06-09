<template>
  <router-link to="/forms/1">
    <button to="/forms/1" class="btn btn-dark">Soy estudiante</button>
  </router-link>
  <router-link to="/forms/2">
    <button to="/forms/1" class="btn btn-dark">Soy empresa</button>
  </router-link>
  <router-link to="/forms/3">
    <button to="/forms/1" class="btn btn-dark">Soy coordinador</button>
  </router-link>
</template>

<script>
import FormularioUno from "@/components/FormularioUno";
export default {
  name: "Formularios",
  components: {
    FormularioUno
  },
  data: () => ({
    index: 1
  })
};
</script>

<style scoped></style>
