<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">
      Formularios
    </router-link>
    <div class="d-flex">
      <div class="btn btn-dark" to="/">
        PersonasUno
      </div>
      <div class="btn btn-dark" to="/">
        PersonasDos
      </div>
      <div class="btn btn-dark" to="/">
        PersonasTres
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
