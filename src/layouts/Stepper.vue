<template>
  <div>
    <header class="flex items-end py-4 justify-between border-b-2 border-gray-200">
      <h2 class="font-bold md:text-2xl">
        <g-link to="/">Virus fördert Viren</g-link>
      </h2>
      <img src="../assets/logo.jpg" class="h-6 md:h-8" />
    </header>
    <main>
      <div>
        <ProgressBar :progress="progress" class="mt-4"></ProgressBar>
        <h3 class="font-semibold mt-1">Maßnahme {{measure.number}} von
          {{totalMeasures}}</h3>
      </div>
      <slot />
      <div class="mt-8 grid gap-2 md:grid-cols-2">
        <Button class="bg-red-500" :to="nextPath"
                @click.native="rejectCurrentMeasure">
          <font-awesome-icon icon="times" class="mr-2" />
          Habe ich nicht gemacht
        </Button>
        <Button class="bg-green-500" :to="nextPath" :key="nextPath"
                @click.native="completeCurrentMeasure">
          <font-awesome-icon icon="check" class="mr-2" />
          Habe ich gemacht
        </Button>
      </div>
      <div class="font-bold text-center mt-4">
        {{completedMeasures}} von {{totalMeasures}} Maßnahmen erfüllt
      </div>
    </main>
  </div>
</template>

<script>

import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

export default {
  components: { Button, ProgressBar },
  props: {
    measure: {
      type: Object,
    },
  },
  computed: {
    completedMeasures() {
      return this.$store.getters.completedMeasuresCount
    },
    totalMeasures() {
      return this.$static.allMeasure.totalCount
    },
    progress() {
      return this.measure.number / this.totalMeasures
    },
    nextPath() {
      const nextNumber = this.measure.number + 1
      const nextEdge = this.$static.allMeasure.edges.find(
        (edge) => edge.node.number === nextNumber,
      )
      return nextEdge ?
        nextEdge.node.path :
        '/done/'
    },
  },
  methods: {
    completeCurrentMeasure() {
      this.$store.commit('completeMeasure', this.measure)
    },
    rejectCurrentMeasure() {
      this.$store.commit('rejectMeasure', this.measure)
    },
  },
}
</script>

<static-query>
  query {
    allMeasure {
      totalCount,
      edges {
        node {
          path,
          number
        }
      }
    }
  }
</static-query>

<style>

</style>
