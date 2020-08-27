<template>
  <v-app>
    <v-app-bar app dark color="black">
      <v-toolbar-title class="ml-md-5">
        <div @click="goHome()" :style="{ cursor: 'pointer', userSelect: 'none' }">
          <span :style="{ fontSize: '1.25rem', fontWeight: '500', letterSpacing: '.0125em' }"
            >CodeKit</span
          >
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon href="https://github.com/wtongze/codekit" target="_blank">
        <v-icon>
          mdi-github
        </v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="mr-md-5">
            <v-icon>
              mdi-translate
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="locale in availableLocale"
            :key="locale.label"
            @click="changeLocale(locale.value)"
          >
            <v-list-item-title>
              <span>{{ locale.label }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { loadLanguageAsync } from '@/i18n';

export default {
  name: 'App',
  data: () => ({
    availableLocale: [
      { label: '中文（简体）', value: 'zhCN' },
      { label: 'English', value: 'en' },
      { label: '日本語', value: 'ja' }
    ]
  }),
  beforeMount() {
    const lang = navigator.language.replace('-', '');
    loadLanguageAsync(lang);
  },
  methods: {
    changeLocale(locale) {
      loadLanguageAsync(locale);
    },
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    }
  }
};
</script>

<style>
:root {
  --header-height: 64px;
}
html {
  overflow-y: auto !important;
}
html[lang='en'] * {
  font-family: 'Montserrat', sans-serif !important;
}
html[lang='ja'] * {
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif !important;
}
html[lang='zhCN'] * {
  font-family: 'Montserrat', 'Noto Sans SC', sans-serif !important;
}
html[lang] code {
  font-family: 'Ubuntu Mono', monospace !important;
  font-size: 1rem !important;
}
</style>
