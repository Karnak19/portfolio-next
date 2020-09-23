<template>
  <div class="hidden">
    <vs-sidebar v-model="active" absolute reduce open hover-expand>
      <template #logo>
        <!-- ...img logo -->
        {{ activePage }}
      </template>
      <vs-sidebar-item
        v-for="page in pages"
        :id="page.id"
        :key="page.id"
        :to="page.link"
      >
        <template #icon>
          <i class="bx" :class="page.icon"></i>
        </template>
        {{ page.title }}
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false, // TODO: Find a way to update when using buttons on index page
      pages: [
        {
          id: 'index',
          link: '/',
          title: 'Home',
          icon: 'bx-home',
        },
        {
          id: 'resume',
          link: '/resume',
          title: 'Resume',
          icon: 'bx-file',
        },
        {
          id: 'portfolio',
          link: '/portfolio',
          title: 'Portfolio',
          icon: 'bx-laptop',
        },
      ],
    }
  },

  mounted() {
    this.active = this.$route.name
  },
}
</script>

<style></style>
