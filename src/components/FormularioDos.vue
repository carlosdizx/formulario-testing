<template>
  <h1>Formulario para empresas</h1>
  <form>
    <input
      type="text"
      class="form-control mt-2"
      placeholder="Ingrese nommbre"
      v-model="personaUno.nombre"
    />
    <input
        type="number"
        class="form-control mt-2"
        placeholder="Ingrese documento"
        v-model.number="personaUno.documento"
    />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="check-1"
        v-model="personaUno.accion"
        value="Representante"
      />
      <label class="form-check-label" for="check-1">Representante</label>
    </div>
    <div class="form-check form-check-inline">
      <input
          class="form-check-input"
          type="checkbox"
          id="check-2"
          v-model="personaUno.accion"
          value="Encargado"
      />
      <label class="form-check-label" for="check-2">Encargado</label>
    </div>
  </form>
  <p>{{personaUno}}</p>
</template>

<script>
export default {
  name: "FormularioUno",
  data() {
    return {
      personaUno: {
        nombre: "",
        documento: 0,
        accion: []
      }
    };
  }
};
</script>

<style scoped></style>
