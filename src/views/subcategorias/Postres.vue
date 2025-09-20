<template>
  <div class="subcategoria-postres">
    <h3>Recetas de Postres 🎂</h3>
    <ul class="lista-recetas">
      <li v-for="receta in recetasPostres" :key="receta.id" class="tarjeta-receta">
        <h4>{{ receta.titulo }}</h4>
        <p>{{ receta.descripcion }}</p>
        <router-link :to="'/receta/' + receta.id" class="link-ver">Ver Receta</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Postres',
  data() {
    return {
      // Simulación de una lista de recetas filtradas para postres
      recetasPostres: [
        {
          id: 'postre-1',
          titulo: 'Tarta de Chocolate',
          descripcion: 'Una deliciosa y rica tarta de chocolate, perfecta para cualquier ocasión.'
        },
        {
          id: 'postre-2',
          titulo: 'Brownies con Nuez',
          descripcion: 'Brownies suaves y masticables con un toque crujiente de nueces.'
        },
        {
          id: 'postre-3',
          titulo: 'Mousse de Limón',
          descripcion: 'Un postre ligero y refrescante, ideal para el verano.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.subcategoria-postres {
  padding: 20px;
}

h3 {
  color: #a0522d;
  margin-bottom: 20px;
}

.lista-recetas {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tarjeta-receta {
  background-color: #f5f5dc;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.tarjeta-receta h4 {
  color: #6a0572;
  margin-bottom: 5px;
}

.link-ver {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #a0522d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>