<template>
  <vs-col w="4" class="side">
    <section v-for="(item, i) in items" :key="i">
      <h3>{{ item.title }}</h3>
      <ul>
        <li v-for="(el, j) in item.list" :key="j">{{ el }}</li>
      </ul>
    </section>
  </vs-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Stack',
          list: [
            'git',
            'Ubuntu',
            'React/Redux',
            'VueJS',
            'NodeJS/Express',
            'Deno',
            'GraphQL',
            'API-Platform',
            'MySQL, Postgres',
            'Mocha/Chai/Jest',
            'Docker',
          ],
        },
        {
          title: 'Languages',
          list: ['French (native)', 'English (technical)', 'Javascript'],
        },
        { title: 'Education', list: ['BTS SIO', 'BAC STG'] },
        {
          title: 'Hobbies',
          list: [
            'Javascript',
            'Video Games',
            'Bodyboard',
            'Internet culture (gif, memes)',
            'Cats',
          ],
        },
      ],
    }
  },
}
</script>

<style>
.page {
  font-family: 'Roboto', 'Arial Narrow', Arial, sans-serif;
  margin: 10%;
  background-color: #2e3135;
  padding: 48px;
  border: 1px solid rgba(0, 0, 0, 0.025);
}

.page .side {
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0px 24px;
}

.page .side section {
  padding: 16px 0px;
}
</style>
