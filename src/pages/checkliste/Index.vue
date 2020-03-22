<template>
  <Layout>
    <div>
      <ProgressBar :progress="progress" class="mt-4"></ProgressBar>
      <h3 class="font-semibold mt-1">Maßnahme {{currentMeasure.number}} von
        {{totalMeasures}}</h3>
    </div>
    <div class="markdown mt-6" v-html="currentMeasure.content" />
    <div class="mt-8 grid gap-2 md:grid-cols-2">
      <Button class="bg-red-500"
              @click.native="rejectCurrentMeasure">
        <font-awesome-icon icon="times" class="mr-2" />
        Habe ich nicht gemacht
      </Button>
      <Button class="bg-green-500"
              @click.native="completeCurrentMeasure">
        <font-awesome-icon icon="check" class="mr-2" />
        Habe ich gemacht
      </Button>
    </div>
    <div class="font-bold text-center mt-4">
      {{completedMeasures}} von {{totalMeasures}} Maßnahmen erfüllt
    </div>
  </Layout>
</template>

<script>
import ProgressBar from '../../components/ProgressBar'
import Button from '../../components/Button'

export default {
  name: 'Checkliste',
   metaInfo: {
    title: 'Checkliste'
  },
  components: { Button, ProgressBar },
  data() {
    return {
      currentNumber: 1
    }
  },
  created() {
    this.$store.commit('startChecklist')
  },
  computed: {
    allMeasures() {
      return this.$static.allMeasure.edges.map((edge) => edge.node)
    },
    currentMeasure() {
      return this.allMeasures[this.currentNumber - 1]
    },
    completedMeasures() {
      return this.$store.getters.completedMeasuresCount
    },
    totalMeasures() {
      return this.$static.allMeasure.totalCount
    },
    progress() {
      return this.currentMeasure.number / this.totalMeasures
    },
  },
  methods: {
    next() {
      const nextNumber = this.currentMeasure.number + 1
      if (nextNumber <= this.allMeasures.length) {
        this.currentNumber = nextNumber
      } else {
        this.$router.push('/checkliste/zusammenfassung')
      }
    },
    completeCurrentMeasure() {
      this.$store.commit('completeMeasure', this.currentMeasure)
      this.next()
    },
    rejectCurrentMeasure() {
      this.$store.commit('rejectMeasure', this.currentMeasure)
      this.next()
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
          content
        }
      }
    }
  }
</static-query>

<style scoped>

</style>
