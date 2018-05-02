import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import uploads from './modules/uploads';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    uploads,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
