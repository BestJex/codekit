import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locales/zhCN';
import zhHans from 'vuetify/es5/locale/zh-Hans';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'zhCN',
  fallbackLocale: 'zhCN',
  messages: {
    zhCN: {
      $vuetify: {
        ...zhHans
      },
      ...messages
    }
  }
});

const loadedLanguages = ['zhCN'];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

function mapLanguage(lang) {
  const langMap = {
    zhCN: 'zh-Hans',
    en: 'en',
    ja: 'ja'
  };
  return Object.keys(langMap).find(key => langMap[key] === lang);
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}.json`).then(msg => {
    const vuetifyLang = mapLanguage(lang);
    const callback = ({ default: vuetifyMsg }) => {
      i18n.setLocaleMessage(lang, { $vuetify: { ...vuetifyMsg }, ...msg });
      loadedLanguages.push(lang);
      return setI18nLanguage(lang);
    };
    console.log(vuetifyLang);
    switch (vuetifyLang) {
      default:
      case 'zh-Hans':
        import(/* webpackChunkName: "lang-vuetify-zh-Hans" */ 'vuetify/es5/locale/zh-Hans.js').then(
          callback
        );
        break;
      case 'en':
        import(/* webpackChunkName: "lang-vuetify-en" */ 'vuetify/es5/locale/en.js').then(
          callback
        );
        break;
      case 'ja':
        import(/* webpackChunkName: "lang-vuetify-ja" */ 'vuetify/es5/locale/ja.js').then(
          callback
        );
        break;
    }
  });
}
