<template>
  <Layout class="text-center">
    <template v-if="$store.state.checklistStarted">
      <h1
        class="leading-tight text-3xl font-semibold mb-4 mt-6 pb-2">
        Ihr
        Home-Office Score</h1>
      <div
        class="w-64 h-64 flex relative items-center justify-center mx-auto mt-12">
        <img src="../../assets/rings.svg" class="absolute" alt="">
        <AnimatedNumber class="font-bold ml-8 text-4xl"
                        :format-value="formatScore" :duration="600"
                        :value="score"
                        easing="easeOutQuad" />
      </div>
      <h2 class="leading-tight text-2xl md:text-3xl font-semibold mb-4 mt-12 pb-2">Übersicht
        der Maßnahmen</h2>
      <ul class="text-base text-lg md:text-xl">
        <li class="mt-2 font-medium" :class="measureClass(measure)"
            v-for="measure in allMeasures"
            :key="measure.id">
          <font-awesome-icon
            :icon="measureIcon(measure)" />
          <g-link :to="measure.path">
            {{ measure.title }}
          </g-link>
        </li>
      </ul>
      <Button class="bg-blue-500 mt-8" to="/checkliste">Checkliste Neustarten</Button>
      <div class="mt-4">
        <g-link to="/massnahmen" class="text-sm text-gray-500 hover:text-gray-600">Zurück zur Startseite</g-link>
      </div>
    </template>
    <template v-else>
      <h1
        class="leading-tight text-3xl font-semibold mt-6 pb-2">Hier fehlt doch was!</h1>
      <p class="text-lg mt-6">
        Wie es scheint haben Sie die Checkliste noch nicht gestartet.
      </p>
      <Button to="/checkliste" class="bg-green-500 mt-6">Jetzt Starten</Button>
      <div class="mt-4">
        <g-link to="/massnahmen" class="text-sm text-gray-500 hover:text-gray-600">Direkt zu den Maßnahmen</g-link>
      </div>
    </template>
  </Layout>
</template>

<script>

import AnimatedNumber from 'animated-number-vue'
import Button from '../../components/Button'

export default {
  name: 'Zusammenfassung',
  components: {
    Button,
    AnimatedNumber,
  },
  computed: {
    allMeasures() {
      return this.$static.allMeasure.edges.map((edge) => edge.node)
    },
    score() {
      return (this.$store.getters.completedMeasuresCount /
        this.allMeasures.length) * 100
    },
  },
  methods: {

    measureClass(measure) {
      const completed = this.wasCompleted(measure)
      return {
        'text-green-500 hover:text-green-600': completed,
        'text-red-500 hover:text-red-600': !completed,
      }
    },
    measureIcon(measure) {
      return this.wasCompleted(measure) ?
        'check' :
        'times'
    },
    formatScore(value) {
      return Math.round(value) + '%'
    },
    wasCompleted(measure) {
      return measure.id in this.$store.state.completedMeasures
    },
  },
}
</script>

<static-query>
  query {
    allMeasure(sortBy: "number", order: ASC) {
      totalCount,
      edges {
        node {
          id
          number
          title
          path
        }
      }
    }
  }
</static-query>

<style scoped>

</style>
