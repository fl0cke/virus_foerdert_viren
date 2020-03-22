<template>
  <Layout>
    <h1 class="leading-tight text-2xl font-semibold mb-4 mt-6 pb-2">Alle Maßnahmen im Überblick</h1>
    <ol class="text-base pl-6 md:pl-8 list-decimal text-lg md:text-xl">
      <li class="ml-2 mt-1 font-medium pl-1" v-for="measure in allMeasures" :key="measure.id">
        <g-link :to="measure.path" class="link">
          {{ measure.title }}
        </g-link>
      </li>
    </ol>
    <p class="mt-4 ">
      Weitere Informationen und Maßnahmen zum Thema IT Sicherheit im Home Office finden Sie unter <a class="link">HIER LINK EINFÜGEN</a>
    </p>
    <p class="mt-4 text-gray-500">
      Sie vermissen eine bestimmte Maßnahme? Dann schreiben Sie uns doch und wir nehmen diese gerne in die Liste mit auf!
    </p>
  </Layout>
</template>

<script>
export default {
  name: 'Massnahmen',
  computed: {
    allMeasures() {
      return this.$static.allMeasure.edges.map((edge) => edge.node)
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
