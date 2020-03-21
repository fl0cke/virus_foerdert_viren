<template>
  <Layout>
    <h1 class="font-bold text-3xl md:text-5xl text-center mt-8 leading-snug">
      Virus fördert Viren</h1>
    <h2 class="font-semibold text-xl md:text-2xl text-center">IT Sicherheit im
      Home
      Office</h2>
    <div class="max-w-2xl mx-auto text-center text-lg">
      <p class="mt-8">
        Die IT-Sicherheit ist auch im Home Office wichtig. In einem
        abgesichertem
        Büro gibt es viele Maßnahmen, um die Sicherheit der Angestellten und der
        Unternehmens-IT zu gewährleisten. Im Home Office sollte man versuchen
        die gleichen Standards einzuhalten.
      </p>
      <p class="mt-6 max-w-2xl">
        Mit diesem Test können Sie prüfen, wie viele der Maßnahmen sie bereits
        umgesetzt haben und was sie tun können, um die IT-Sicherheit im Home
        Office zu verbessern.
      </p>
      <Button class="mt-8 bg-green-500" :to="firstMeasure.path">Starten</Button>
    </div>
  </Layout>
</template>


<script>
import Button from '../components/Button'

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    Button,
  },
  computed: {
    firstMeasure() {
      return this.$static.allMeasure.edges[0].node
    },
  },
}
</script>

<static-query>
  query {
  allMeasure(filter: { number: { eq: 1 }}) {
  edges {
  node {
  path
  }
  }
  }
  }
</static-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
