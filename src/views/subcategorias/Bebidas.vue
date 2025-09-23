<template>
  <div class="subcategoria-bebidas">
    <h3>Recetas de Bebidas 🍹</h3>
    <ul class="lista-recetas">
      <li v-for="receta in recetasBebidas" :key="receta.id" class="tarjeta-receta">
        <h4>{{ receta.titulo }}</h4>
        <p>{{ receta.descripcion }}</p>
        <router-link :to="'/receta/' + receta.id" class="link-ver">Ver Receta</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bebidas',
  data() {
    return {
      // Simulación de una lista de recetas filtradas para bebidas
      recetasBebidas: [
        {
          id: 'bebida-1',
          titulo: 'Limonada Refrescante',
          descripcion: 'Una limonada clásica y refrescante, perfecta para los días calurosos.'
        },
        {
          id: 'bebida-2',
          titulo: 'Batido de Frutas Tropicales',
          descripcion: 'Un delicioso batido hecho con una mezcla de frutas tropicales.'
        },
        {
          id: 'bebida-3',
          titulo: 'Té Helado de Durazno',
          descripcion: 'Un té helado con sabor a durazno, ideal para acompañar tus comidas.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.subcategoria-bebidas {
  padding: 20px;
}

h3 {
  color: #008080;
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
  background-color: #e0ffff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.tarjeta-receta h4 {
  color: #006666;
  margin-bottom: 5px;
}

.link-ver {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #008080;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>