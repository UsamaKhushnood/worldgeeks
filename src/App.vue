<template>
  <div id="app">
    <AdminLayout v-if="$route.meta.layout === 'adminLayout'" />
    <UserLayout v-if="$route.meta.layout === 'userLayout'" />
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
