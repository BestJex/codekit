<template>
  <div class="home">
    <div class="bg">
      <picture class="bg-img">
        <source :srcset="require('../assets/bg.webp')" type="image/webp" />
        <source :srcset="require('../assets/bg.jpg')" type="image/jpeg" />
        <img :src="require('../assets/bg.jpg')" />
      </picture>
      <div class="bg-center">
        <h1 class="white--text text-h2 text-md-h1 mb-1">{{ $t('home.bg.1') }}</h1>
        <h2 class="white--text text-h3 text-md-h2 font-weight-regular mb-5">
          {{ $t('home.bg.2') }}
        </h2>
        <v-text-field
          v-model="keyword"
          :placeholder="$t('home.bg.placeholder')"
          solo
          :class="$vuetify.breakpoint.mobile ? 'search-mobile' : 'search'"
          @keydown.enter.prevent="search"
        >
          <template v-slot:append>
            <v-btn depressed :to="'/search/' + keyword" class="px-2">
              {{ $t('home.bg.search') }}
              <v-icon class="icon-align">mdi-chevron-right</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const adjBackground = () => {
      const clientHeight = document.querySelector('.v-toolbar__content').clientHeight;
      document.documentElement.style.setProperty('--header-height', `${clientHeight}px`);
    };
    window.addEventListener('load', adjBackground);
    window.addEventListener('resize', adjBackground);
  },
  data: () => ({
    keyword: ''
  }),
  methods: {
    search() {
      this.$router.push(`/search/${this.keyword}`);
    }
  }
};
</script>

<style scoped>
.home {
  overflow: hidden;
}
.bg {
  position: relative;
  width: 100%;
  height: calc(100vh - var(--header-height));
}
.bg-img > img,
.bg-img > source {
  filter: brightness(0.6);
  height: calc(100vh - var(--header-height));
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.bg-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
}
.bg-center .search {
  width: 40vw;
  min-width: 550px;
  max-width: 800px;
  margin: auto;
}
.bg-center .search-mobile {
  width: 75vw;
  min-width: 300px;
  max-width: 800px;
  margin: auto;
}
.bg-center h1,
.bg-center h2 {
  text-shadow: 2px 2px 8px black;
}
.icon-align {
  display: inline;
  vertical-align: text-bottom;
}
</style>
