<template>
  <div class="perfil-autor">
    <header class="header">
      <h2>Perfil del Autor</h2>
      <h3 v-if="nombre" class="nombre-autor">¡Hola, soy {{ nombre }}!</h3>
    </header>
    
    <div class="info-autor">
      <p>Soy un apasionado de la cocina y me encanta compartir mis recetas contigo.</p>
      <p>¡Explora todas mis creaciones y déjame un comentario!</p>
    </div>
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

<style scoped>
.perfil-autor {
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.header {
  margin-bottom: 50px;
  padding: 20px;
}

.header h2 {
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  color: #343a40;
}

.nombre-autor {
  font-size: 2.5rem;
  color: #e95420;
  font-style: italic;
  margin-top: 10px;
}

.info-autor {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.8;
}

.info-autor p {
  color: #495057;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

/* ------------------------------------------- */
/* Estilos responsivos */
/* ------------------------------------------- */

@media (max-width: 768px) {
  .perfil-autor {
    padding: 20px;
  }
  
  .header h2 {
    font-size: 2.5rem;
  }
  
  .nombre-autor {
    font-size: 2rem;
  }
  
  .info-autor {
    max-width: 90%;
    padding: 25px;
  }
  
  .info-autor p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .perfil-autor {
    padding: 15px;
  }
  
  .header h2 {
    font-size: 2rem;
  }
  
  .nombre-autor {
    font-size: 1.5rem;
  }
  
  .info-autor {
    padding: 20px;
  }
  
  .info-autor p {
    font-size: 1rem;
  }
}
</style>