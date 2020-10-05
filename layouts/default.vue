<template>
  <div>
    <Sidebar />
    <div class="content-scoped ml-45">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
// import Fragment from 'vue-fragment'

export default {
  components: {
    // Fragment,
  },
}
</script>

<style>
body {
  background-color: #1e2023;
  color: #ffffff;
  font-family: 'Baloo Tammudu 2', cursive;
  line-height: 1.5;
}

.ml-45 {
  margin-left: 45px;
}

.content-scoped {
  min-height: 92vh;
}

@media screen and (max-width: 768px) {
  .content-scoped {
    min-height: 88vh;
  }
}
</style>
