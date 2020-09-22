<template>
  <footer class="ml-45 grid">
    <vs-row class="footer" justify="flex-end" direction="column">
      <vs-col
        vs-type="flex"
        vs-justify="flex-end"
        vs-align="center"
        offset="1"
        w="10"
      >
        Made with ☕️ and 🍕 in 🇫🇷 | Basile V.©
      </vs-col>
    </vs-row>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  height: 6vh;
}

.footer {
  height: 100%;
  text-align: center;
  letter-spacing: 2px;
  word-spacing: 4px;
}

@media screen and (max-width: 900px) {
  .footer {
    letter-spacing: normal;
    word-spacing: normal;
  }
}
</style>
