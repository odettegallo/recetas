<template>
  <div class="detalle-receta-container">
    <div v-if="receta" class="receta-card">
      <header class="receta-header">
        <h1 class="receta-titulo">{{ receta.titulo }}</h1>
        <p class="receta-id">Receta con ID: {{ id }}</p>
      </header>

      <section class="receta-seccion">
        <h2 class="seccion-titulo">Ingredientes</h2>
        <ul class="ingredientes-lista">
          <li v-for="ingrediente in receta.ingredientes" :key="ingrediente">
            {{ ingrediente }}
          </li>
        </ul>
      </section>

      <section class="receta-seccion">
        <h2 class="seccion-titulo">Preparación</h2>
        <div class="preparacion-texto" v-html="formattedPreparacion"></div>
      </section>

    </div>
    <div v-else class="receta-no-encontrada">
      <p>Lo sentimos, la receta con el ID {{ id }} no fue encontrada.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      recetas: [
        { id: '123', 
        titulo: 'Receta de Pastel Clásico', 
        ingredientes: ['harina', 'azúcar', 'huevos'], 
        preparacion: 'Mezclar todos los ingredientes secos, luego agregar los líquidos. Mezclar bien hasta obtener una masa homogénea. Hornear a 180°C por 30 minutos.' },

        { id: '456', 
        titulo: 'Receta de Ensalada', 
        ingredientes: ['lechuga', 'tomate', 'pollo'], 
        preparacion: 'Cocer el pollo en agua hirviendo, escurrir y reservar. Lavar la lechuga y los tomates bajo la llave con agua fría y reservar. Cortar la lechuga con la mano y los tomates en trozos. Unir todos los ingredientes cortados y sazonar a gusto.' },
        { 
          id: '678', 
          titulo: 'Panqueques Clásicos', 
          ingredientes: ['harina', 'azúcar', 'huevos', 'leche', 'mantequilla'], 
          preparacion: '1. En un bol grande, mezcla la harina, el azúcar, el polvo de hornear y la sal.\n2. En otro bol, bate la leche, los huevos y la mantequilla derretida.\n3. Vierte la mezcla líquida sobre la de los ingredientes secos y mezcla hasta que estén combinados, sin batir en exceso.\n4. Calienta una sartén antiadherente a fuego medio y vierte un poco de la mezcla. Cocina hasta que aparezcan burbujas en la superficie.\n5. Voltea el panqueque y cocina por el otro lado hasta que esté dorado. Sirve con miel o fruta.' 
        },
        { 
          id: '910', 
          titulo: 'Sopa de Tomate', 
          ingredientes: ['tomates', 'cebolla', 'ajo', 'caldo de verduras', 'albahaca fresca'], 
          preparacion: '1. Calienta aceite de oliva en una olla grande a fuego medio. Añade la cebolla y el ajo, y cocina hasta que estén blandos.\n2. Agrega los tomates y el caldo de verduras. Deja que hierva y luego reduce el fuego, cocinando a fuego lento durante 20 minutos.\n3. Usa una batidora de inmersión para triturar la sopa hasta que esté suave. Alternativamente, transfiere la sopa a una licuadora.\n4. Condimenta con sal, pimienta y albahaca fresca. Sirve caliente.' 
        }
      ],
      receta: null
    };
  },
  computed: {
    formattedPreparacion() {
      // Replaces newline characters with HTML line breaks
      return this.receta.preparacion.replace(/\n/g, '<br>');
    }
  },
  created() {
    this.receta = this.recetas.find(r => r.id === this.id);
  }
};
</script>

<style scoped>
.detalle-receta-container {
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.receta-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.receta-header {
  margin-bottom: 30px;
  text-align: center;
}

.receta-titulo {
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  color: #343a40;
  margin-bottom: 5px;
}

.receta-id {
  font-size: 1.2rem;
  color: #6c757d;
  font-style: italic;
}

.receta-seccion {
  margin-top: 30px;
}

.seccion-titulo {
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  color: #e95420;
  margin-bottom: 20px;
  border-bottom: 2px solid #e95420;
  padding-bottom: 5px;
  display: inline-block;
}

.ingredientes-lista {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredientes-lista li {
  background-color: #fff3e0;
  border-left: 5px solid #e95420;
  padding: 12px 20px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
}

.preparacion-texto {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #495057;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.receta-no-encontrada {
  text-align: center;
  padding: 50px;
  color: #dc3545;
  font-size: 1.5rem;
  border: 2px dashed #dc3545;
  border-radius: 8px;
  background-color: #fff3f4;
  max-width: 600px;
  margin: 0 auto;
}

/* ------------------------------------------- */
/* Estilos responsivos */
/* ------------------------------------------- */

@media (max-width: 768px) {
  .receta-titulo {
    font-size: 2.5rem;
  }
  
  .seccion-titulo {
    font-size: 2rem;
  }
  
  .ingredientes-lista li,
  .preparacion-texto {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .receta-titulo {
    font-size: 2rem;
  }
  
  .seccion-titulo {
    font-size: 1.8rem;
  }
  
  .receta-card {
    padding: 20px;
  }
}
</style>