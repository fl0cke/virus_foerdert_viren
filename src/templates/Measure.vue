<template>
  <Layout :measure="$page.measure">
    <div class="markdown" v-html="$page.measure.content" />
  </Layout>
</template>

<script>

import Stepper from '../layouts/Stepper'

export default {
  name: 'Measure',
  components: {
    Layout: Stepper
  }
}
</script>

<page-query>
  query Measure ($id: ID!) {
    measure: measure (id: $id) {
      id
      number
      content
    }
  }
</page-query>
