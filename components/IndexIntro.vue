<template>
  <vs-row class="content">
    <vs-col type="flex" class="col" vs-align="center" offset="2" lg="4" sm="10">
      <header>
        <h1 class="name">Basile Vernouillet</h1>
        <h2>Web developer / trainer @ Wild Code School</h2>
        <p>
          Hey ! I'm a web developer, using mostly JavaScript in both frontend
          and backend environment. Currently I'm working as a trainer at Wild
          Code School - Biarritz
        </p>
      </header>
      <footer class="flex-row">
        <vs-button block warn gradient size="large" to="/resume">
          <i class="bx bx-file"></i> Resume
        </vs-button>
        <vs-button block gradient size="large" to="/portfolio">
          <i class="bx bx-laptop"></i> Portfolio
        </vs-button>
      </footer>
    </vs-col>
    <vs-col lg="4" sm="12" class="mt-30">
      <img src="/portrait.webp" class="rounded" alt="Basile V" />
    </vs-col>
  </vs-row>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 900px) {
  .mt-30 {
    margin-top: 30px;
  }

  .vs-col--offset-2 {
    margin-left: 8.3%;
  }
}

.name {
  font-size: 50px;
}

.rounded {
  border-radius: 50%;
}

.bx {
  margin-right: 5px;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.content {
  text-align: center;
  padding-top: 30px;
}

.col {
  flex-direction: column;
  text-align: left;
}

.col h1,
.col h2,
.col p {
  margin: 0;
}
</style>
