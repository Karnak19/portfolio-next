<template>
  <vs-col w="4" class="side">
    <section>
      <h3>Stack</h3>
      <ul>
        <li v-for="(stack, i) in stacks" :key="i">{{ stack }}</li>
      </ul>
    </section>
    <section>
      <h3>Educ</h3>
      <ul>
        <li v-for="(educ, i) in educs" :key="i">{{ educ }}</li>
      </ul>
    </section>
    <section>
      <h3>Languages</h3>
      <ul>
        <li v-for="(lang, i) in langs" :key="i">{{ lang }}</li>
      </ul>
    </section>
    <section>
      <h3>Hobbies</h3>
      <ul>
        <li v-for="(hobby, i) in hobbies" :key="i">{{ hobby }}</li>
      </ul>
    </section>
  </vs-col>
</template>

<script>
export default {
  data() {
    return {
      stacks: [
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
      langs: ['French (native)', 'English (technical)', 'Javascript'],
      educs: ['BTS SIO', 'BAC STG'],
      hobbies: [
        'Javascript',
        'Video Games',
        'Bodyboard',
        'Internet culture (gif, memes)',
        'Cats',
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
