// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'typeface-open-sans'
import Vuex from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faCheck, faTimes)

export default function (Vue, { appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // install font awesome icons
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // Set up vuex
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      completedMeasures: {},
    },
    getters: {
      completedMeasuresCount: state => Object.keys(state.completedMeasures).length
    },
    mutations: {
      completeMeasure (state, measure) {
        Vue.set(state.completedMeasures, measure.id, measure)
      },
      rejectMeasure (state, measure) {
        Vue.delete(state.completedMeasures, measure.id)
      },
      reset(state) {
        state.completedMeasures = {}
      }
    }
  })

}
