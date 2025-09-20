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
}

.header {
  margin-bottom: 50px;
}

.header h1 {
  font-size: 2.5rem;
  color: #333;
}

.header p {
  font-size: 1.2rem;
  color: #666;
}

.destacados {
  margin-top: 50px;
}

.destacados h2 {
  font-size: 2rem;
  color: #444;
  margin-bottom: 30px;
}

.tarjetas-recetas {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.tarjeta-receta {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
}

.tarjeta-receta h3 {
  color: #007bff;
  margin-bottom: 10px;
}

.link-ver {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>