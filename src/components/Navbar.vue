<template>
  <nav class="navbar">
    <router-link to="/">Recetas Caseras</router-link>
    <router-link to="/">Inicio</router-link>
    <router-link to="/categorias">Categorías</router-link>
    <router-link to="/receta/123">Receta de Prueba</router-link>
    <router-link to="/autor/Juan_Perez">Perfil de Autor</router-link>
  </nav>
</template>

<style scoped>
.navbar a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}
.navbar a.router-link-active {
  font-weight: bold;
  color: #007bff;
}
</style>

