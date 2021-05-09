<template>
    <div class="flex flex-col items-center justify-center gap-5 p-10 text-sm text-gray-600 bg-white shadow-sm rounded-3xl">
      <span class="text-xl font-medium">Vue with Tailwind CSS | Template</span>
      <div class="flex flex-row items-center justify-center gap-5 text-2xl font-medium">
        <a href="https://br.vuejs.org/" title="Vue Docs" :class="iconClass">
            <img src="@/assets/img/vue.png" alt="VueJS" width="100">
        </a>
        <span>+</span>
        <a href="https://tailwindcss.com/" title="TailwindCSS Docs" :class="iconClass">
            <img src="@/assets/img/tailwindcss.png" alt="TailwindCSS" width="100">
        </a>
        <span>+</span>
        <a href="https://boxicons.com/" title="Boxicons Docs" :class="iconClass">
          <img src="@/assets/img/boxicons.png" alt="Boxicons" width="100">
        </a>
      </div>
      <div class="flex items-center gap-5">
        <p class="text-xs">Template made by Mich</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      iconClass: 'duration-200 transform hover:scale-105'
    }
  }
}
</script>
