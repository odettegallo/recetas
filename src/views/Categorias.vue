<template>
  <div class="categorias-recetas">
    <header class="header">
      <h1>Categorías de Recetas</h1>
      <p>Explora nuestras deliciosas categorías y encuentra la receta perfecta.</p>
    </header>
    
    <nav class="navegacion-categorias">
      <router-link to="/subcategorias/postres" class="link-categoria">Postres</router-link>
      <router-link to="/subcategorias/bebidas" class="link-categoria">Bebidas</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Categorias',
};
</script>

<style scoped>
.categorias-recetas {
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  min-height: 100vh;
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

.navegacion-categorias {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.link-categoria {
  display: inline-block;
  padding: 12px 24px;
  background-color: #e95420;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.link-categoria:hover {
  background-color: #d14818;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* ------------------------------------------- */
/* Estilos responsivos */
/* ------------------------------------------- */

@media (max-width: 768px) {
  .categorias-recetas {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 2.5rem;
  }
  
  .header p {
    font-size: 1.2rem;
  }
  
  .navegacion-categorias {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .link-categoria {
    width: 90%;
    max-width: 300px;
    font-size: 1.1rem;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .categorias-recetas {
    padding: 15px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .header p {
    font-size: 1rem;
  }
  
  .link-categoria {
    font-size: 1rem;
    padding: 12px;
  }
}
</style>