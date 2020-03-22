<template>
  <div id="app" class="max-w-3xl mx-auto px-4 font-body">
    <router-view />
    <TheFooter />
  </div>
</template>
<script>
import TheFooter from './components/TheFooter'
export default {
   metaInfo: {
    title: 'Virus fördert Viren',
    titleTemplate: '%s | Virus fördert Viren',
    meta: [
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Virus fördert Viren | IT-Sicherheit im Home-Office'},
      {name: 'twitter:description', content: 'Diese Checkliste führt Sie durch Maßnahmen zur Verbesserung der IT-Sicherheit in ihrer Home-Office Umgebung.'},
      {name: 'twitter:image', content: 'https://virus-foerdert-viren.netlify.com/assets/img/logo.d33b643a.jpg'},
      {property: 'og:title', content: 'Virus fördert Viren | IT-Sicherheit im Home-Office'},
      {property: 'og:site_name', content: 'Virus fördert Viren'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content: 'https://virus-foerdert-viren.netlify.com/assets/img/logo.d33b643a.jpg'}, 
      {property: 'og:description', content: 'Diese Checkliste führt Sie durch Maßnahmen zur Verbesserung der IT-Sicherheit in ihrer Home-Office Umgebung.'}
    ]
  },
  components: { TheFooter },
}
</script>
