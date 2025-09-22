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
  background-color: #f8f9fa; /* Un color de fondo muy suave para el cuerpo */
}

.header {
  margin-bottom: 50px;
  padding: 20px;
}

.header h1 {
  font-size: 3.5rem; /* Título más grande y llamativo */
  font-family: 'Playfair Display', serif; /* Fuente elegante para el título */
  color: #343a40;
}

.header p {
  font-size: 1.4rem; /* Texto descriptivo más legible */
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
  gap: 30px; /* Aumenta el espacio entre las tarjetas */
  flex-wrap: wrap;
}

.tarjeta-receta {
  background-color: #ffffff; /* Fondo blanco para las tarjetas */
  border-radius: 12px; /* Bordes más redondeados */
  padding: 30px; /* Más espacio interno */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra más pronunciada para dar profundidad */
  width: 320px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición para un efecto al pasar el mouse */
}

.tarjeta-receta:hover {
  transform: translateY(-5px); /* Efecto de "levantar" la tarjeta */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); /* Sombra más fuerte al hacer hover */
}

.tarjeta-receta h3 {
  color: #e95420; /* Color llamativo para el título de la receta */
  font-family: 'Georgia', serif;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.tarjeta-receta p {
  color: #495057; /* Color de texto más oscuro para mejor legibilidad */
}

.link-ver {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px; /* Botón más grande y fácil de hacer clic */
  background-color: #e95420;
  color: white;
  text-decoration: none;
  border-radius: 6px; /* Bordes más suaves para el botón */
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.link-ver:hover {
  background-color: #d14818; /* Color de fondo más oscuro al pasar el mouse */
}
</style>