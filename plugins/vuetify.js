import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import en from "@/i18n/english";
import ar from "@/i18n/arabic";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", JSON.stringify({ value: "en", rtl: false }));
}
const language = JSON.parse(localStorage.getItem("lang"));

let lang = language.value;
let rtl = language.rtl;

Vue.use(Vuetify);
export default new Vuetify({
  rtl,
  lang: {
    locales: { en, ar },
    current: lang,
    defaultLocale: "en",
  },
  theme: {
    themes: {
      light: {
        primary: "#2e3f51",
        secondary: "#33aada",
        accent: "#2E3F51",
        error: "#EF4B35",
        info: "#90278F",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
