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
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap');

body {
  background-color: #1e1e22;
  color: #ffffff;
  font-family: 'Baloo Tammudu 2', cursive;
  line-height: 1.5;
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
