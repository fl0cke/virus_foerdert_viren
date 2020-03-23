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

<style scoped>
main .markdown blockquote {
    font-size: 1.2rem;
    font-weight: bold;
    color: #525dcf;
    border-left: 0px solid #525dcf;
    padding: 1.5rem 2rem;
    margin: 2rem 0;
    background: #f8f8f8;
}

main .markdown h1 {
	font-size: 1.5rem;
}

main .markdown h2 {
	font-size: 1.125rem;
	line-height: 1.375;
}

</style>

<page-query>
  query Measure ($id: ID!) {
    measure (id: $id) {
      id
      number
      content
    }
  }
</page-query>

