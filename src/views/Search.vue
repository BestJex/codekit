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
            v-model="keyword"
            :placeholder="$t('home.bg.placeholder')"
            solo
            @keyup="search"
            :style="{ textOverflow: 'ellipsis' }"
          >
            <template v-slot:append>
              <v-btn icon @click="search">
                <v-icon class="icon-align">mdi-magnify</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-container>
      </v-col>
    </v-row>
    <v-container class="pa-5">
      <v-card class="my-4 rounded-lg" v-for="(result, index) in searchResult" :key="index">
        <v-card-title>
          <router-link :to="'/package/' + result.item.key">
            <span class="pkg-link">{{ result.item.name }}</span>
          </router-link>
        </v-card-title>
        <v-card-text class="pb-0">
          <div class="markdown-body" v-html="renderMd(result.item.description).html"></div>
        </v-card-text>
        <v-card-actions>
          <v-btn text :href="renderMd(result.item.description).source" target="_blank">
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
import RouterLink from '@/components/RouterLink';
import 'github-markdown-css';
import pkgObj from '@/packages/';
import mdConvert from '@/utils/mdConvert.js';

export default {
  name: 'Search',
  data: () => ({
    loading: false,
    pkgInfo: [],
    fuse: undefined,
    keyword: '',
    searchResult: [],
    source: [],
    rawMdHTML: []
  }),
  methods: {
    search() {
      this.searchResult = this.fuse.search(this.keyword);
    },
    renderMd(src) {
      return mdConvert.toDescObj(src);
    },
    setUp() {
      (async () => {
        const loadingTimer = setTimeout(() => {
          this.loading = true;
        }, 1000);
        for (const pkg of Object.keys(pkgObj)) {
          const { default: description } = await import(
            /* webpackChunkName: "pkg-[request]" */ `@/packages/${pkg}/description/${this.$i18n.locale}.md`
          );
          this.pkgInfo.push({
            name: pkgObj[pkg],
            key: pkg,
            description
          });
        }
        this.fuse = new Fuse(this.pkgInfo, {
          keys: [
            { name: 'name', score: 0.7 },
            { name: 'description', score: 0.3 }
          ],
          includeScore: true
        });
        this.search();
        clearTimeout(loadingTimer);
        this.loading = false;
      })();
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    }
  },
  watch: {
    locale() {
      this.pkgInfo = [];
      this.setUp();
    }
  },
  mounted() {
    this.keyword = this.$route.params.keyword;
    this.setUp();
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
