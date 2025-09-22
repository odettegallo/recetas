<template>
  <div class="inicio">
    <header class="header">
      <h1>¡Bienvenido a Recetas del Mundo!</h1>
      <p>Explora un sinfín de sabores y descubre nuevas recetas para tus platillos favoritos.</p>
    </header>
    
    <section class="destacados">
      <h2>Recetas Destacadas</h2>
      <div class="tarjetas-recetas">
        <div class="tarjeta-receta">
          <h3>Panqueques Clásicos</h3>
          <p>La receta perfecta para un desayuno delicioso y rápido.</p>
          <router-link to="/receta/123" class="link-ver">Ver Receta</router-link>
        </div>
        <div class="tarjeta-receta">
          <h3>Sopa de Tomate</h3>
          <p>Una sopa reconfortante para cualquier día.</p>
          <router-link to="/receta/456" class="link-ver">Ver Receta</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
};
</script>

<style scoped>
.inicio {
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
}

.header {
  margin-bottom: 50px;
  padding: 20px;
}

.header h1 {
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  color: #343a40;
}

.header p {
  font-size: 1.4rem;
  color: #6c757d;
  font-style: italic;
}

.destacados {
  margin-top: 50px;
}

.destacados h2 {
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  color: #343a40;
  margin-bottom: 30px;
}

.tarjetas-recetas {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.tarjeta-receta {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarjeta-receta:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.tarjeta-receta h3 {
  color: #e95420;
  font-family: 'Georgia', serif;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.tarjeta-receta p {
  color: #495057;
}

.link-ver {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #e95420;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.link-ver:hover {
  background-color: #d14818;
}

/* ------------------------------------------- */
/* Estilos responsivos */
/* ------------------------------------------- */

/* Para pantallas más pequeñas (tabletas y móviles) */
@media (max-width: 768px) {
  .inicio {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 2.5rem;
  }
  
  .header p {
    font-size: 1.2rem;
  }
  
  .destacados h2 {
    font-size: 2rem;
  }
  
  .tarjetas-recetas {
    flex-direction: column; /* Apila las tarjetas en una columna */
    align-items: center; /* Centra las tarjetas */
    gap: 20px;
  }
  
  .tarjeta-receta {
    width: 90%; /* Las tarjetas ocupan casi todo el ancho disponible */
    max-width: 400px; /* Evita que las tarjetas sean demasiado anchas en pantallas grandes */
    padding: 25px;
  }
  
  .tarjeta-receta h3 {
    font-size: 1.3rem;
  }
}

/* Para pantallas muy pequeñas (móviles pequeños) */
@media (max-width: 480px) {
  .inicio {
    padding: 15px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .header p {
    font-size: 1rem;
  }
  
  .destacados h2 {
    font-size: 1.8rem;
  }
  
  .tarjeta-receta {
    padding: 20px;
  }
  
  .link-ver {
    padding: 10px 20px;
  }
}
</style>