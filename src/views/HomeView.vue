<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    return {
      socials: [
        {
          name: 'Github',
          icon: 'mdi-github',
          link: 'https://github.com/q0ney'
        },
        {
          name: 'Steam',
          icon: 'mdi-steam',
          link: 'https://steamcommunity.com/id/q1y/'
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/q0ney'
        },
      ],
    };
  },
}
</script>

<template>
  <section class="h-screen grid place-content-center">
    <img src="/images/essa.gif">
  </section>
  <section class="h-screen grid place-content-center text-pink-500">
    <div class="flex gap-10">
      <a v-for="social in socials"
      :href="social.link"
      :key="social.name"
      target="_blank"
      class="hover:text-pink-300 text-4xl">
      <v-icon>{{ social.icon }}</v-icon>
      </a>
    </div>
  </section>
</template>


<style scoped>
section{
  background-color: #0c0107;
}

@media screen and (max-width: 768px){
  section {
    padding: 1rem;
  }
}
</style>