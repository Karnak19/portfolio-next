<template>
  <div>
    <Sidebar />
    <div class="content ml-45">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #1e1e22;
  color: #ffffff;
}

.ml-45 {
  margin-left: 45px;
}

.content {
  min-height: 92vh;
}

@media screen and (max-width: 768px) {
  .content {
    min-height: 88vh;
  }
}
</style>
