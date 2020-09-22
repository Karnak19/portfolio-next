<template>
  <vs-col
    vs-type="flex"
    vs-justify="center"
    vs-align="center"
    lg="8"
    sm="12"
    offset="2"
  >
    <vs-alert color="warn" gradient>
      <template #icon>
        <i class="bx bxs-info-circle"></i>
      </template>
      <template #title>Work in progress</template>
      Hey ! Welcome on my new personnal website/portfolio ! Everything here is
      in a <b>WIP</b> state. So expect to see a lot of changes every time you
      jump in ! 🌈
      <template #footer> Basile V. </template>
    </vs-alert>
  </vs-col>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 900px) {
  .vs-col--offset-2 {
    margin-left: 0%;
  }
}
</style>
