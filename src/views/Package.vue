<template>
  <div class="package">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <v-row align="end" justify="center" class="package-bg" no-gutters>
      <v-col>
        <v-container class="mb-2 pa-5">
          <v-row no-gutters align="center">
            <v-col>
              <h1>{{ pkgName }}</h1>
            </v-col>
            <v-col>
              <v-btn text class="d-block ml-auto mr-0" large @click="$router.go(-1)">
                <span :style="{ fontSize: '1rem' }">{{ $t('package.back') }}</span>
                <v-icon>mdi-undo-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-container class="pa-5">
      <div class="mt-4">
        <h2 class="mb-2">{{ $t('package.description') }}</h2>
        <div class="pa-6">
          <div class="mb-2 markdown-body" v-html="description.html"></div>
          <div class="text-right">
            <v-btn link elevation="0" :href="description.source" target="_blank">
              {{ $t('package.source') }}
              <v-icon small>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="mb-4">{{ $t('package.mirror') }}</h2>
        <v-card>
          <v-tabs v-model="mirrorNum">
            <v-tab v-for="(mirror, index) in mirrors" :key="index + 'tab'">
              {{ mirror.name }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="mirrorNum">
            <v-tab-item v-for="(mirror, index) in mirrors" :key="index + 'tab-item'">
              <v-card flat>
                <v-card-text class="px-6 pt-4 pb-2">
                  <div class="markdown-body" v-html="mirror.html"></div>
                </v-card-text>
                <v-card-actions class="px-6 pt-2 pb-4">
                  <v-btn
                    link
                    class="ml-auto mr-0 px-4"
                    elevation="0"
                    :href="mirror.website"
                    target="_blank"
                  >
                    {{ $t('package.website') }}
                    <v-icon small>mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </div>
      <div class="my-8">
        <v-row class="mb-4" align="center" justify="space-between">
          <v-col cols="5">
            <h2 :style="{ marginBottom: '30px' }">{{ $t('package.setup') }}</h2>
          </v-col>
          <v-col cols="7">
            <v-select
              class="select-os"
              v-model="os"
              :items="osList"
              label="os"
              solo
              :placeholder="$t('package.select')"
            ></v-select>
          </v-col>
        </v-row>
        <v-stepper v-model="stepNum" :key="!!steps.length" :style="{ marginTop: '-32px' }">
          <v-stepper-header class="stepper-header">
            <template v-for="(title, i) in titles">
              <v-stepper-step :key="`${i}-step`" :step="i + 1"></v-stepper-step>
              <v-divider v-if="i !== titles.length - 1" :key="`${i}-divider`"></v-divider>
            </template>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content
              v-for="(step, i) in steps"
              :key="`${i}-content`"
              :step="i + 1"
              class="pt-4"
            >
              <div class="mb-6" v-if="i === steps.length - 1">
                <v-alert class="mb-0" type="info" text>
                  {{ $t('package.star1') }}
                  <a
                    href="https://github.com/wtongze/codekit"
                    target="_blank"
                    rel="noopener"
                    class="star-link font-weight-bold"
                    >Github</a
                  >
                  {{ $t('package.star2') }}
                </v-alert>
              </div>
              <h2 class="mb-4">
                {{ i + 1 + ' - ' + titles[i] }}
              </h2>
              <div v-html="step" class="markdown-body"></div>
              <v-btn depressed class="copy-btn mt-4 d-block ml-auto mr-0">
                <v-icon class="mr-2" small>mdi-content-copy</v-icon>
                {{ $t('package.copy') }}
              </v-btn>
              <div style="height: 60px"></div>
              <v-row
                class="ml-0 mr-0"
                :style="{ position: 'absolute', bottom: '16px', width: 'calc(100% - 48px)' }"
              >
                <v-btn
                  class="ml-0 mr-auto"
                  text
                  @click="stepNum = stepNum - 1"
                  :disabled="stepNum === 1"
                >
                  {{ $t('package.prev') }}
                </v-btn>
                <v-btn
                  class="ml-auto mr-0"
                  color="primary"
                  @click="stepNum = stepNum + 1"
                  :disabled="stepNum === steps.length"
                >
                  {{ $t('package.next') }}
                </v-btn>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <div class="d-none d-sm-block mt-4 px-6 copyright">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener"
            :style="{ textDecoration: 'none' }"
            class="mr-4"
            >CC BY-NC-SA 4.0</a
          >
          <a
            href="http://mirrors.ustc.edu.cn/help/"
            target="_blank"
            :style="{ textDecoration: 'none' }"
            class="mr-4"
            >{{ $t('package.source') }}</a
          >
          <span class="mr-4">
            © 2020, CodeKit.net
          </span>
          <span>
            © 2017 - 2020, LUG@USTC
          </span>
        </div>
        <div class="d-table d-sm-none mt-4 px-6 copyright">
          <div>
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener"
              :style="{ textDecoration: 'none' }"
              class="mr-4"
              >CC BY-NC-SA 4.0</a
            >
            <a
              href="http://mirrors.ustc.edu.cn/help/"
              target="_blank"
              :style="{ textDecoration: 'none' }"
              >{{ $t('package.source') }}</a
            >
          </div>
          <span>
            © 2020, CodeKit.net
            <br />
            © 2017 - 2020, LUG@USTC
          </span>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import * as Clipboard from 'clipboard';
import DOMPurify from 'dompurify';
import marked from '@/utils/markdown';
import mdConvert from '@/utils/mdConvert.js';
import pkgObj from '@/packages/';
import mirrorObj from '@/mirrors';
import 'github-markdown-css';

export default {
  name: 'Package',
  data: () => ({
    pkgName: '',
    description: {},
    titles: [''],
    steps: [''],
    mirrors: [{ name: '', html: '', website: '' }],
    mirrorsOption: [],
    stepNum: 1,
    mirrorNum: 1,
    loading: false,
    os: 0,
    osList: [],
    clipboard: null
  }),
  computed: {
    locale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setUp() {
      (async () => {
        const loadingTimer = setTimeout(() => {
          this.loading = true;
        }, 1000);
        const mirrors = [];
        const mirrorsOption = [];
        const { name: pkg } = this.$route.params;
        const { default: rawDescription } = await import(
          /* webpackChunkName: "pkg-[request]" */ `@/packages/${pkg}/description/${this.$i18n.locale}.md`
        );
        const { default: rawSteps } = await import(
          /* webpackChunkName: "pkg-[request]" */ `@/packages/${pkg}/steps/${this.$i18n.locale}.md`
        );
        const { default: rawInfo } = await import(
          /* webpackChunkName: "pkg-[request]" */ `@/packages/${pkg}/`
        );
        for (const mirrorName of rawInfo.mirrors) {
          const mirrorKey = Object.keys(mirrorObj).find(key => mirrorObj[key] === mirrorName);
          const { default: rawMirror } = await import(
            /* webpackChunkName: "mirror-[request]" */ `@/mirrors/${mirrorKey}/description/${this.$i18n.locale}.md`
          );
          const { default: rawMirrorOption } = await import(
            /* webpackChunkName: "mirror-[request]" */ `@/mirrors/${mirrorKey}/packages/${pkg}.js`
          );
          mirrors.push({ ...mdConvert.toDescObj(rawMirror), name: mirrorName });
          mirrorsOption.push(rawMirrorOption);
        }
        const rendered = DOMPurify.sanitize(marked(rawSteps));
        const titles = [...rendered.matchAll(/<h1.+>(?<title>.+)<\/h1>/g)].map(
          match => match.groups.title.match(/\d\s?-\s?(?<title>.+)/).groups.title
        );
        const packagesOption = rawInfo.os;
        const variables = {
          ...mirrorsOption[this.mirrorNum],
          ...packagesOption[this.os].variables
        };
        const steps = rendered
          .split(/<\/?h1.+>/)
          .slice(1)
          .map(step => {
            const matches = [...step.matchAll(/\{\{(?<key>.+?)\}\}/g)];
            matches.forEach(match => {
              const { key } = match.groups;
              step = step.replaceAll(`{{${key}}}`, variables[key]);
            });
            return step;
          });
        this.osList = rawInfo.os.map(({ name: text }, value) => ({
          text,
          value
        }));
        this.description = mdConvert.toDescObj(rawDescription);
        this.titles = [...titles];
        this.steps = [...steps];
        this.mirrors = [...mirrors];
        this.mirrorsOption = [...mirrorsOption];
        clearTimeout(loadingTimer);
        this.loading = false;
        setTimeout(() => {
          document.querySelectorAll('.copy-btn').forEach((el, i) => {
            el.setAttribute('data-clipboard-target', `#code-${i}`);
          });
          document.querySelectorAll('.markdown-body pre code').forEach((el, i) => {
            el.id = `code-${i}`;
          });
          if (this.clipboard) this.clipboard.destroy();
          this.clipboard = new Clipboard('.copy-btn');
        }, 500);
      })();
    }
  },
  beforeMount() {
    this.pkgName = pkgObj[this.$route.params.name];
    if (this.pkgName) {
      this.setUp();
    } else {
      this.$router.push(`/search/${this.$route.params.name}`);
    }
  },
  updated() {
    const steps = document.querySelectorAll('.v-stepper__content');
    const stepsHeight = [];
    steps.forEach(step => {
      if (step.style.display === 'none') {
        step.style.display = 'block';
        stepsHeight.push(step.scrollHeight);
        step.style.display = 'none';
      } else {
        stepsHeight.push(step.scrollHeight);
      }
    });
    const maxHeight = Math.max(...stepsHeight);
    steps.forEach(step => {
      step.style.height = `${maxHeight}px`;
    });
  },
  watch: {
    locale() {
      this.setUp();
    },
    os() {
      this.setUp();
    },
    mirrorNum() {
      this.setUp();
    }
  }
};
</script>

<style scoped>
.package-bg {
  height: 240px;
  width: 100%;
  background-color: whitesmoke;
  margin: 0;
}
.stepper-header {
  box-shadow: none !important;
}
.select-os {
  max-width: 400px;
  margin-left: auto;
  margin-right: 0;
}
.star-link {
  margin-left: 4px;
  margin-right: 4px;
  color: #2196f3;
}
.copyright * {
  font-size: 14px;
  color: black !important;
}
.copyright span {
  cursor: default;
}
.markdown-body pre .copy-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
