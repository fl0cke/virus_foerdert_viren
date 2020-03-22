<template>
  <Layout class="text-center">
    <h1 class="font-bold text-3xl md:text-5xl text-center mt-8 leading-snug">
      Virus fördert Viren</h1>
    <h2 class="font-semibold text-xl md:text-2xl text-center">IT Sicherheit im
      Home
      Office</h2>
    <p class="mt-8 text-lg">
      Die IT-Sicherheit ist auch im Home Office wichtig. In einem
      abgesichertem
      Büro gibt es viele Maßnahmen, um die Sicherheit der Angestellten und der
      Unternehmens-IT zu gewährleisten. Im Home Office sollte man versuchen
      die gleichen Standards einzuhalten.
    </p>
    <p class="mt-6 text-lg">
      Mit diesem Test können Sie prüfen, wie viele der Maßnahmen sie bereits
      umgesetzt haben und was sie tun können, um die IT-Sicherheit im Home
      Office zu verbessern.
    </p>
    <Button class="mt-8 bg-green-500" :to="firstMeasure.path">Starten</Button>
    <h3 class="font-semibold text-2xl mt-8">Weiterführende Hilfe</h3>
    <section class="mt-6">
      <ul class="mt-4 grid gap-2 grid-cols-2">
        <li class="card">
          <h4 class="font-semibold">Verdächtige Mail erhalten?</h4>
          <p class="mt-3">Bitte folgen Sie den Hinweisen der
            Polizei-Beratungsstelle zum Thema <a
              class="link"
              target="_blank"
              href="https://www.polizei-beratung.de/startseite-und-aktionen/aktuelles/detailansicht/phishing-schutz-vor-aktuellen-maschen/">Phishing.</a>
          </p>
        </li>
        <li class="card">
          <h4 class="font-semibold">Verdächtige Person stand vor der Tür?</h4>
          <p class="mt-3">Bitte folgen Sie den Hinweisen der
            Polizei-Beratungsstelle zum Thema <a
              class="link"
              target="_blank"
              href="https://www.polizei-beratung.de/startseite-und-aktionen/aktuelles/detailansicht/phishing-schutz-vor-aktuellen-maschen/">
              Haustürbetrug mit COVID-19.</a></p>
        </li>
        <li class="card">
          <h4 class="font-semibold">Sie sind Opfer eines Cyberangriffs?</h4>
          <p class="mt-3">
            Zur <a class="link" target="_blank"
                   href="https://www.allianz-fuer-cybersicherheit.de/ACS/DE/Angebote/IT-Notfallkarte/it-notfallkarte_einstieg_node.html">IT-Notfallkarte</a>
            der Allianz für Cybersicherheit.
          </p>
        </li>
        <li class="card">
          <h4 class="font-semibold">Sie wollen Anzeige erstatten?</h4>
          <p class="mt-3">
            Für Unternehmen: <a class="link" target="_blank"
                                href="https://www.polizei.de/Polizei/DE/Einrichtungen/ZAC/zac_node.html">polizei.de</a>
            <br>
            Für Bürger:innen: <a class="link" target="_blank"
                                 href="https://online-strafanzeige.de/">online-strafanzeige.de</a>
          </p>
        </li>
        <li class="card col-span-2">
          <h4 class="font-semibold">Beratung durch das BSI für Bürger</h4>
          <p class="mt-2">
            Telefon: <a class="link" href="tel:0800 2741000">0800
            2741000</a>
            <br>
            Kostenlos aus dem deutschen Fest- und Mobilfunknetz <br>
            Erreichbarkeit: Montag bis Freitag von 8:00 bis 18:00 Uhr <br>
            Oder schicken Sie eine E-Mail an: <a
            href="mailto:mail@bsi-fuer-buerger.de" class="link">mail@bsi-fuer-buerger.de</a>
            <br>
            <a class="link"
               target="_blank"
               href="https://www.bsi-fuer-buerger.de/BSIFB/DE/Wissenswertes_Hilfreiches/Kontakt/kontakt_node.html">Zur
              Homepage vom BSI</a>
          </p>
        </li>
      </ul>
    </section>
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

<style scoped>
.card {
  @apply bg-gray-100 p-4 rounded-lg;
}
</style>
