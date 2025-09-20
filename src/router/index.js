import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Categorias from '../views/Categorias.vue'
import DetalleReceta from '../views/DetalleReceta.vue'
import PerfilAutor from '../views/PerfilAutor.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias,
    children: [
      {
        path: 'postres',
        component: () => import('../views/subcategorias/Postres.vue')
      },
      {
        path: 'bebidas',
        component: () => import('../views/subcategorias/Bebidas.vue')
      }
    ]
  },
  {
    path: '/receta/:id',
    name: 'DetalleReceta',
    component: DetalleReceta,
    props: true
  },
  {
    path: '/autor/:nombre',
    name: 'PerfilAutor',
    component: PerfilAutor,
    props: (route) => ({ nombre: route.params.nombre })
  },
  {
    path: '/inicio',
    redirect: { name: 'Inicio' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
