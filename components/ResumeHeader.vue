<template>
  <vs-row>
    <vs-col>
      <vs-row class="stretch">
        <vs-col w="2" style="display: flex" class="xs-none">
          <img src="portrait.webp" alt="Basile Vernouillet portrait" />
        </vs-col>
        <vs-col w="6">
          <h1>BASILE VERNOUILLET</h1>
          <h2>Javascript developer / trainer</h2>
        </vs-col>
        <vs-col w="4">
          <ul>
            <li class="clipboard" @click="copyToClipboard('Karnak19')">
              <i class="bx bxl-github"></i>
              Karnak19
            </li>
            <li class="clipboard" @click="copyToClipboard('+33 6 58 85 15 18')">
              <i class="bx bxs-phone"></i> +33 6 58 85 15 18
            </li>
            <li
              class="clipboard"
              @click="copyToClipboard('basile.vernouillet@gmail.com')"
            >
              <i class="bx bxs-message-alt-detail"></i>
              basile.vernouillet@gmail.com
            </li>
            <li><i class="bx bxs-map-pin"></i> Bayonne/Biarritz/Anglet</li>
          </ul>
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  methods: {
    copyToClipboard(value) {
      navigator.clipboard.writeText(value).then(() =>
        this.$vs.notification({
          position: 'bottom-center',
          color: 'success',
          title: 'Copied !',
          icon: "<i class='bx bx-check-circle' ></i>",
          text: 'Successfully copied to clipboard !',
          duration: 1000,
        })
      )
    },
  },
}
</script>

<style>
.page .stretch {
  align-items: stretch !important;
}

.page .clipboard {
  cursor: pointer;
}

.page .clipboard:hover {
  color: rgb(var(--vs-primary));
}

.page img {
  border-radius: 50%;
  width: 100%;
  max-width: 120px;
  margin: auto;
}

.page h1 {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.4rem;
}

.page h2 {
  font-size: 1.25rem;
  font-weight: 300;
}

@media screen and (max-width: 900px) {
  .xs-none {
    display: none !important;
  }
}
</style>
