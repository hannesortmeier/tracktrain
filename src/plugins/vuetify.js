import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import de from 'vuetify/es5/locale/de';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#ebefe8"
      },
      dark: {
        background: "#fdbe01"
      }
    },
  },
})

export default new Vuetify({
  lang: {
    locales: { de },
    current: 'de',
  },
});
