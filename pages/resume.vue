<template>
  <div class="page">
    <ResumeHeader />
    <hr />
    <vs-row>
      <vs-col w="8" class="main">
        <section>hello</section>
        <hr />
        <section>world</section>
        <hr />
        <section>youpi</section></vs-col
      >
      <ResumeSide />
    </vs-row>
  </div>
</template>

<script>
import ResumeSide from '@/components/ResumeSide'
import ResumeHeader from '@/components/ResumeHeader'
export default {
  components: {
    ResumeSide,
    ResumeHeader,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');

.page ul {
  padding-left: 0px;
}

.page li {
  list-style: none;
}

.page .main {
  padding-right: 30px;
}

@media screen and (max-width: 900px) {
  .page {
    margin: 30px;
    padding: 20px;
  }
}

@media screen and (min-width: 1200px) {
  .page {
    margin: 200px;
  }
}
</style>
