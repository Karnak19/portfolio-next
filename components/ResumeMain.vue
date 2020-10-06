<template>
  <vs-col w="8" xs="12" class="main">
    <vs-row>
      <vs-col w="12">
        <vs-row>
          <vs-col w="9" xs="12">
            <h3>Job</h3>
          </vs-col>
          <vs-col w="3" xs="12">
            <p class="company-date">Company | Dates</p>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col w="12" class="desc">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iure
          aperiam officia, repudiandae a deleniti autem explicabo fuga
          voluptates ratione at suscipit quibusdam totam tempora mollitia dolore
          molestiae beatae numquam?
        </p>
      </vs-col>
    </vs-row>
    <hr />
    <vs-row>
      <h3>Title</h3>
    </vs-row>
    <hr />
    <vs-row>
      <h3>Title</h3>
    </vs-row>
    <hr />
  </vs-col>
</template>

<script>
export default {}
</script>

<style>
.company-date {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4) !important;
}

.page .main {
  padding-right: 30px;
}

.desc p {
  font-size: 0.88rem;
}
</style>
