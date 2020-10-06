<template>
  <div class="page">
    <ResumeHeader />
    <hr />
    <vs-row>
      <ResumeMain />
      <ResumeSide />
    </vs-row>
  </div>
</template>

<script>
import ResumeSide from '@/components/ResumeSide'
import ResumeMain from '@/components/ResumeMain'
import ResumeHeader from '@/components/ResumeHeader'
export default {
  components: {
    ResumeSide,
    ResumeMain,
    ResumeHeader,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');

.page ul {
  padding-left: 0px;
}

.page h3 {
  margin: 0;
}

.page p {
  margin: 0;
}

.page li {
  list-style: none;
  padding: 3px 0;
}

@media screen and (max-width: 900px) {
  .page {
    margin: 20px;
    padding: 15px;
  }
}

@media screen and (min-width: 1200px) {
  .page {
    margin: 200px;
  }
}
</style>
