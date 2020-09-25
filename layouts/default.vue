<template>
  <div>
    <Sidebar />
    <div class="content-scoped ml-45">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #1e1e22;
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
