<template>
  <div>
    <h2>Perfil del Autor</h2>
    <h3 v-if="nombre">¡Hola, soy {{ nombre }}!</h3>
    <p>Soy un apasionado de la cocina y me encanta compartir mis recetas contigo.</p>
    <p>¡Explora todas mis creaciones y déjame un comentario!</p>
  </div>
</template>

<script>
export default {
  name: 'PerfilAutor',
  // Se declara la prop 'nombre' que Vue Router le pasará al componente
  props: {
    nombre: {
      type: String,
      required: true
    }
  }
}
</script>