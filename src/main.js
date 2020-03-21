// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'typeface-open-sans'
import Vuex from 'vuex'


export default function (Vue, { appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Set up vuex
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      // TODO: use a Set ?
      completedMeasures: {},
    },
    getters: {
      completedMeasuresCount: state => Object.keys(state.completedMeasures).length
    },
    mutations: {
      completeMeasure (state, measure) {
        Vue.set(state.completedMeasures, measure.id, measure)
      },
      reset(state) {
        state.completedMeasures = {}
      }
    }
  })

}
