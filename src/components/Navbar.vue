<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Recetas Caseras</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categorias" class="nav-link">Categorías</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/receta/123" class="nav-link">Receta de Prueba</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/autor/Juan Perez" class="nav-link">Perfil de Autor</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-brand {
  font-family: 'Georgia', serif;
  font-weight: bold;
}
</style>