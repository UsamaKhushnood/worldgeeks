<template>
  <div id="app">
    <YaiphareLayout v-if="$route.meta.layout === 'yaiphareLayout'" />
    <UserLayout v-if="$route.meta.layout === 'userLayout'" />
    <router-view v-if="$route.meta.layout === 'universal'"></router-view>
  </div>
</template>
<script>
import UserLayout from './layouts/UserLayout.vue'
import YaiphareLayout from './layouts/YaiphareLayout.vue'

export default {
  components: {
    UserLayout,
    YaiphareLayout,
  },
}
</script>
