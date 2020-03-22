<template>
  <Layout>
    <div class="mt-2 flex justify-between items-end content-end">
      <h5 class="font-semibold">Maßnahme Nr. {{$page.measure.number}}</h5>
      <g-link to="/massnahmen" class="link">Zur Übersicht</g-link>
    </div>
    <div class="markdown mt-4" v-html="$page.measure.content" />
  </Layout>
</template>

<script>


export default {
  name: 'Measure',
}
</script>

<page-query>
  query Measure ($id: ID!) {
    measure (id: $id) {
      id
      number
      content
    }
  }
</page-query>
