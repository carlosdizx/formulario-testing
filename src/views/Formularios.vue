<template>
  <button class="btn btn-dark">Soy estudiante</button>
  <button class="btn btn-dark">Soy empresa</button>
  <button class="btn btn-dark">Soy coordiandor</button>
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
