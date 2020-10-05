<template>
  <div>
    <vs-row>
      <vs-col>
        <vs-row>
          <vs-col w="8">
            <h1>BASILE VERNOUILLET</h1>
          </vs-col>
          <vs-col w="4">
            <ul>
              <li class="clipboard" @click="copyToClipboard('Karnak19')">
                <i class="bx bxl-github"></i>
                Karnak19
              </li>
              <li
                class="clipboard"
                @click="copyToClipboard('+33 6 58 85 15 18')"
              >
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
    <hr />
    <vs-row>
      <vs-col w="8"> MAIN SIDE </vs-col>
      <vs-col w="4"> SIDE BAR </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  components: {},
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

<style scoped>
li {
  list-style: none;
}
.clipboard {
  cursor: pointer;
}

.clipboard:hover {
  color: rgb(var(--vs-primary));
}
</style>
