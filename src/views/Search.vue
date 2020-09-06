<template>
  <div class="search">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <v-row align="end" justify="center" class="search-bg" no-gutters>
      <v-col>
        <v-container class="pa-5">
          <h1 class="mb-2">{{ $t('home.bg.search') }}</h1>
          <v-text-field
            v-model="search.keyword"
            :placeholder="$t('home.bg.placeholder')"
            solo
            @keyup="searchKeyword"
            :style="{ textOverflow: 'ellipsis' }"
          >
            <template v-slot:append>
              <v-btn icon @click="searchKeyword">
                <v-icon class="icon-align">mdi-magnify</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-container>
      </v-col>
    </v-row>
    <v-container class="pa-5">
      <v-card class="my-4 rounded-lg" v-for="pkg in search.result" :key="pkg.key">
        <v-card-title>
          <router-link :to="'/package/' + pkg.key">
            <span class="pkg-link">{{ pkg.name }}</span>
          </router-link>
        </v-card-title>
        <v-card-text class="pb-0">
          <div class="markdown-body" v-html="mdRender(pkg.description)"></div>
        </v-card-text>
        <v-card-actions>
          <v-btn text :href="pkg.reference" target="_blank">
            {{ $t('search.source') }}
            <v-icon small>mdi-open-in-new</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import DOMPurify from 'dompurify';
import marked from 'marked';
import RouterLink from '@/components/RouterLink';
import 'github-markdown-css';

export default {
  name: 'Search',
  data: () => ({
    loading: false,
    search: {
      index: [],
      result: [],
      keyword: '',
      fuse: null
    }
  }),
  created() {
    this.search.keyword = this.$route.params.keyword;
    this.loadData();
  },
  methods: {
    loadData() {
      (async () => {
        const loadingTimer = setTimeout(() => {
          this.loading = true;
        }, 1000);
        const { data: searchIndex } = await import(
          /* webpackChunkName: "pkg-[request]" */ `@/data/search.${this.locale}.json`
        );
        this.search.index = [...searchIndex];
        this.search.fuse = new Fuse(this.search.index, {
          keys: [
            { name: 'name', score: 0.7 },
            { name: 'description', score: 0.3 }
          ],
          includeScore: true
        });
        this.searchKeyword();
        clearTimeout(loadingTimer);
        this.loading = false;
      })();
    },
    searchKeyword() {
      const { fuse, keyword } = this.search;
      this.search.result = fuse.search(keyword).map(result => result.item);
    },
    mdRender(src) {
      return DOMPurify.sanitize(marked(src));
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    }
  },
  watch: {
    locale() {
      this.loadData();
    }
  },
  components: {
    RouterLink
  }
};
</script>

<style scoped>
.search-bg {
  height: 240px;
  width: 100%;
  background-color: whitesmoke;
  margin: 0;
}
.search-field {
  width: 40vw;
  margin: auto;
}
.pkg-link {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
}
.markdown-body {
  font-family: inherit;
}
</style>
