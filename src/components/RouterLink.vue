<template>
  <router-link :to="to" class="router-link-clean">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'RouterLinkClean',
  props: ['to']
};
</script>

<style scoped>
.router-link-clean {
  text-decoration: none;
  color: #1976D2;
}
.router-link-clean:hover {
  text-decoration: underline;
}
</style>
