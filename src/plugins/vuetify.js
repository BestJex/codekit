import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { i18n } from '@/i18n.js';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#000000',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
});
