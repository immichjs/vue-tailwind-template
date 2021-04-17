<template>
  <div id="app" class="flex items-center justify-center h-screen bg-gray-50">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'App',
  title: 'Vue with Tailwind CSS | Template',
  components: {
    Home
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
