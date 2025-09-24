<template>
  <div id="app">
    <Navbar />
    <router-view v-slot="{ Component }">
  <transition name="fade" >
    <component :is="Component" />
  </transition>
</router-view>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
/* CSS para la transición */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>