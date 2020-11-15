<template>
  <vs-col w="8" xs="12" class="main">
    <vs-row v-for="(exp, i) in experiences" :key="i" class="exp">
      <vs-col w="12">
        <vs-row>
          <vs-col w="9" xs="12">
            <h3>{{ exp.job }}</h3>
          </vs-col>
          <vs-col w="3" xs="12">
            <p class="company-date">{{ exp.company }} | {{ exp.dates }}</p>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col w="12" class="desc">
        <p class="pre-formatted">
          {{ exp.desc }}
        </p>
      </vs-col>
    </vs-row>
    <hr />
    <p style="font-weight: 900; font-size: 40px">WORK IN PROGRESS</p>
  </vs-col>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          job: 'Javascript Trainer',
          company: 'Wild Code School',
          dates: "Feb 19' - now",
          desc: `My goal is to train/teach web development (Javascript based, React and NodeJS/Express) to people with nearly 0 experiences of it.
          We use a curated and project-based approach, so each trainee will do 3 projects during his 5 months training : 
              - 1 static HTML/CSS/JS,
              - 1 frontend (React, fetch async datas from various APIs),
              - 1 fullstack with real client (React + NodeJS/Express/MySQL + integration tests with Jest/Supertest or Mocha/Chai)
          So I am much more a lead dev than a school teacher.

          In a nutshell: 65+ students trained, 100+ motivation/technical interviews, 15+ projects drived/led`,
        },
        {
          job: 'Fullstack developer',
          company: 'Clic & Coupe',
          dates: "Oct 18' - Dec 18'",
          desc: `This project was a v1/beta for Clic & Coupe. For instance, this is a Doctolib-like web application, but for hairdressers.
        Frontend: React, Bootstrap, Axios
        Backend: Symfony 4, API-Platform, MySQL`,
        },
      ],
    }
  },
}
</script>

<style>
.company-date {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4) !important;
}

.pre-formatted {
  white-space: pre-line;
}

.exp {
  padding: 20px 0 30px 0;
}

.page .main {
  padding-right: 30px;
}

.desc p {
  font-size: 0.88rem;
}
</style>
