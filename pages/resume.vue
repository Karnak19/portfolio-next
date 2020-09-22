<template>
  <div class="container">
    <div>
      <header class="content-logos">
        <logo />
        <span class="plus">+</span>
        <VuesaxLogo />
      </header>
      <h1 class="title">Nuxt.js + Vuesax</h1>
      <h2 class="subtitle">
        <a href="https://vuesax.com/">Vuesax</a> is a framework of ui components
        for <a href="https://vuejs.org/">Vuejs</a>, It was created to make new
        interfaces that have a new trend and are visually beautiful
      </h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuesaxLogo from '~/components/VuesaxLogo.vue'

export default {
  components: {
    Logo,
    VuesaxLogo,
  },
}
</script>
