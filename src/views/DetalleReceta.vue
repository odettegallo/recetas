<template>
  <div>
    <h2>Detalle de la Receta con ID: {{ id }}</h2>
    <p>Aquí se mostrarán los detalles de la receta {{ id }}.</p>
    <div v-if="receta">
      <h3>{{ receta.titulo }}</h3>
      <p>Ingredientes: {{ receta.ingredientes.join(', ') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      recetas: [
        { id: '123', titulo: 'Receta de Pastel', ingredientes: ['harina', 'azúcar', 'huevos'] },
        { id: '456', titulo: 'Receta de Ensalada', ingredientes: ['lechuga', 'tomate', 'pollo'] }
      ],
      receta: null
    };
  },
  created() {
    this.receta = this.recetas.find(r => r.id === this.id);
  }
};
</script>