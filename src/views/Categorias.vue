<template>
  <div>
    <h1>Categorías de Recetas</h1>
    <nav>
      <router-link to="/subcategorias/postres">Postres</router-link>
      <router-link to="/subcategorias/bebidas">Bebidas</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>