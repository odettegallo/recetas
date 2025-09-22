<template>
  <div class="detalle-receta-container">
    <div v-if="receta" class="receta-card">
      <h1 class="receta-titulo">{{ receta.titulo }}</h1>
      <p class="receta-id">Receta con ID: {{ id }}</p>
      
      <div class="receta-seccion">
        <h2 class="seccion-titulo">Ingredientes</h2>
        <ul class="ingredientes-lista">
          <li v-for="ingrediente in receta.ingredientes" :key="ingrediente">
            {{ ingrediente }}
          </li>
        </ul>
      </div>
      
      <div class="receta-seccion">
        <h2 class="seccion-titulo">Preparación</h2>
        <p class="preparacion-texto">
          Aquí irían las instrucciones detalladas para preparar la receta. Por ejemplo:
          Mezclar todos los ingredientes secos, luego agregar los líquidos. Mezclar bien hasta obtener una masa homogénea. Hornear a 180°C por 30 minutos.
        </p>
      </div>

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

<style scoped>
.detalle-receta-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.receta-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

.receta-titulo {
  font-size: 2.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.receta-id {
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 30px;
}

.receta-seccion {
  margin-bottom: 30px;
  border-top: 1px solid #e9ecef;
  padding-top: 20px;
}

.seccion-titulo {
  font-size: 1.8rem;
  color: #555;
  margin-bottom: 15px;
}

.ingredientes-lista {
  list-style-type: none;
  padding: 0;
}

.ingredientes-lista li {
  background-color: #f8f9fa;
  border-left: 4px solid #e95420;
  margin-bottom: 10px;
  padding: 12px 15px;
  font-size: 1.1rem;
}

.preparacion-texto {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #495057;
}

.receta-no-encontrada {
  text-align: center;
  padding: 50px;
  color: #dc3545;
  font-size: 1.2rem;
  border: 1px dashed #dc3545;
  border-radius: 8px;
  background-color: #fff3f4;
}

/* ------------------------------------------- */
/* Estilos responsivos */
/* ------------------------------------------- */

/* Para pantallas más pequeñas (smartphones) */
@media (max-width: 768px) {
  .detalle-receta-container {
    padding: 15px;
  }
  
  .receta-card {
    padding: 20px;
  }
  
  .receta-titulo {
    font-size: 2rem; /* Tamaño de fuente más pequeño para dispositivos móviles */
  }

  .seccion-titulo {
    font-size: 1.5rem; /* Tamaño de fuente más pequeño para títulos de sección */
  }
  
  .ingredientes-lista li,
  .preparacion-texto {
    font-size: 1rem; /* Tamaño de fuente más pequeño para el texto del cuerpo */
  }
}

/* Para pantallas muy pequeñas (menos de 480px) */
@media (max-width: 480px) {
  .receta-titulo {
    font-size: 1.8rem;
  }

  .receta-id {
    font-size: 0.9rem;
  }

  .seccion-titulo {
    font-size: 1.3rem;
  }
  
  .receta-card {
    padding: 15px;
  }
}
</style>