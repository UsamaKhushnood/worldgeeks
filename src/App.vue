<template>
  <div id="app">
    <UserLayout v-if="$route.meta.layout === 'userLayout'" />
    <AdminLayout v-else />
  </div>
</template>
<script>
import UserLayout from './layouts/UserLayout.vue'
import AdminLayout from './layouts/AdminLayout.vue'

export default {
  components: {
    UserLayout,
    AdminLayout,
  },
}
</script>
