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
              <h1>{{ pkg.name }}</h1>
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
    <v-container v-if="pkg" class="pa-5">
      <div class="mt-4">
        <h2 class="mb-2">{{ $t('package.description') }}</h2>
        <div class="pa-6">
          <div class="mb-2 markdown-body" v-html="mdRender(pkg.description)"></div>
          <div class="text-right">
            <v-btn
              link
              elevation="0"
              :href="pkg.references.description.url || ''"
              target="_blank"
            >
              {{ $t('package.source') }}
              <v-icon small>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="mb-4">{{ $t('package.mirror') }}</h2>
        <v-card>
          <v-tabs v-model="current.mirror">
            <v-tab v-for="(mirror, i) in pkg.mirrors" :key="i + '-tab'">
              {{ mirror.name }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="current.mirror">
            <v-tab-item v-for="(mirror, i) in pkg.mirrors" :key="i + '-tab-item'">
              <v-card flat>
                <v-card-text class="px-6 pt-4 pb-2">
                  <div class="markdown-body" v-html="mdRender(mirror.description)"></div>
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
              v-model="current.os"
              :items="pkg.os"
              item-text="name"
              :item-value="target => pkg.os.indexOf(target)"
              label="os"
              solo
              :placeholder="$t('package.select')"
            ></v-select>
          </v-col>
        </v-row>
        <v-stepper v-model="current.step" :key="pkg.steps.length" :style="{ marginTop: '-32px' }">
          <v-stepper-header class="stepper-header">
            <template v-for="(step, i) in pkg.steps">
              <v-stepper-step :key="`${i}-step`" :step="i + 1"></v-stepper-step>
              <v-divider v-if="i !== pkg.steps.length - 1" :key="`${i}-divider`"></v-divider>
            </template>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content
              v-for="(step, i) in pkg.steps"
              :key="`${i}-content`"
              :step="i + 1"
              class="pt-4"
            >
              <h2 class="mb-4">
                {{ i + 1 + ' - ' + step.title }}
              </h2>
              <div v-html="stepRender(step.content)" class="markdown-body"></div>
              <v-btn
                depressed
                class="copy-btn mt-4 d-block ml-auto mr-0"
                v-if="i !== pkg.steps.length - 1"
              >
                <v-icon class="mr-2" small>mdi-content-copy</v-icon>
                {{ $t('package.copy') }}
              </v-btn>
              <div class="mt-6" v-else>
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
              <div style="height: 60px"></div>
              <v-row
                class="ml-0 mr-0"
                :style="{ position: 'absolute', bottom: '16px', width: 'calc(100% - 48px)' }"
              >
                <v-btn
                  class="ml-0 mr-auto"
                  text
                  @click="current.step--"
                  :disabled="current.step === 1"
                >
                  {{ $t('package.prev') }}
                </v-btn>
                <v-btn
                  class="ml-auto mr-0"
                  color="primary"
                  @click="current.step++"
                  :disabled="current.step === pkg.steps.length"
                >
                  {{ $t('package.next') }}
                </v-btn>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <div class="mt-4 px-6 copyright">
          <a
            :href="pkg.references.steps.license_url"
            target="_blank"
            rel="noopener"
            :style="{ textDecoration: 'none' }"
            class="mr-4"
            >{{ pkg.references.steps.license }}</a
          >
          <a
            :href="pkg.references.steps.url"
            target="_blank"
            :style="{ textDecoration: 'none' }"
            class="mr-4"
            >{{ $t('package.source') }}</a
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
import DOMPurify from 'dompurify';
import marked from 'marked';
import yaml from 'js-yaml';
import 'github-markdown-css';
import { data as packages } from '@/data/packages';

export default {
  name: 'Package',
  data: () => ({
    pkg: {
      description: '',
      mirrors: [],
      name: '',
      os: [],
      references: {
        description: {
          url: ''
        },
        steps: {
          license: '',
          license_url: '',
          url: ''
        }
      },
      steps: []
    },
    current: {
      mirror: 0,
      os: 0,
      step: 1
    },
    loading: false,
    clipboard: null
  }),
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    variables() {
      return {
        ...(this.pkg.mirrors[this.current.mirror] || {}).variables,
        ...(this.pkg.os[this.current.os] || {}).variables
      };
    }
  },
  methods: {
    stepRender(src) {
      let compiledSrc = src;
      [...src.matchAll(/(?<varStr>\{\{\s?(?<varName>.*?)\s?\}\})/g)].forEach(({ groups: match }) => {
        compiledSrc = compiledSrc.replace(match.varStr, this.variables[match.varName]);
      });
      return this.mdRender(compiledSrc);
    },
    mdRender(src) {
      return DOMPurify.sanitize(marked(src));
    },
    parsePkgInfo(info) {
      const sepatatorPosition = info.indexOf('# ');
      const description = info.substr(0, sepatatorPosition).trim();
      const stepsContent = info.substr(sepatatorPosition).trim();
      const steps = [];
      stepsContent
        .split(/[\s\S]{0,2}#\s?\d\s?-\s?(.*)[\s\S]{1,2}/)
        .slice(1)
        .forEach((text, i) => {
          const content = text.trim();
          if (i % 2 === 0) {
            steps[i / 2] = { title: content };
          } else {
            steps[(i - 1) / 2].content = content;
          }
        });
      return { description, steps };
    },
    loadPkg() {
      (async () => {
        // Start loading animation
        const loadingTimer = setTimeout(() => {
          this.loading = true;
        }, 1000);

        // Get package key
        const { name: pkgKey } = this.$route.params;

        // Import pacakage '<locale>.md' and '_config.yaml'
        const { default: pkgInfo } = await import(
          /* webpackChunkName: "pkg-[request]" */
          `@/packages/${pkgKey}/${this.locale}.md`
        );
        const { default: tempPkgConfig } = await import(
          /* webpackChunkName: "pkg-[request]" */
          `@/packages/${pkgKey}/_config.yaml`
        );
        const pkgConfig = yaml.load(tempPkgConfig);

        const pkgMirrors = [...pkgConfig.mirrors];
        pkgConfig.mirrors = [];
        pkgMirrors.forEach(async (mirror, i) => {
          // Get mirror key
          const mirrorKey = Object.keys(mirror)[0];

          // Import mirror description
          const { default: mirrorDescription } = await import(
            /* webpackChunkName: "mirror-[request]" */
            `@/mirrors/${mirrorKey}/${this.locale}.md`
          );

          // Import mirror _config.yaml
          const { default: tempMirrorConfig } = await import(
            /* webpackChunkName: "mirror-[request]" */
            `@/mirrors/${mirrorKey}/_config.yaml`
          );
          const mirrorConfig = yaml.load(tempMirrorConfig);

          // Add mirror data into pkgConfig
          pkgConfig.mirrors.push({
            key: mirrorKey,
            description: mirrorDescription,
            variables: {
              ...pkgMirrors[i][mirrorKey]
            },
            ...mirrorConfig
          });
        });

        const { description, steps } = this.parsePkgInfo(pkgInfo);
        this.pkg = {
          ...pkgConfig,
          description,
          steps
        };

        // Connect clipboard
        this.connectClipboard();
        this.adjustStepper();

        // Stop loading animation
        clearTimeout(loadingTimer);
        this.loading = false;
      })();
    },
    adjustStepper() {
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
    connectClipboard() {
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
    }
  },
  created() {
    const { name } = this.$route.params;
    if (packages.includes(name)) {
      this.loadPkg();
    } else {
      this.$router.push(`/search/${name}`);
    }
  },
  updated() {
    this.adjustStepper();
    this.connectClipboard();
  },
  watch: {
    locale() {
      this.loadPkg();
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
.markdown-body a {
  color: #0366d6 !important;
  text-decoration: none !important;
}
.markdown-body a:hover {
  text-decoration: underline !important;
}
.markdown-body pre .copy-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
