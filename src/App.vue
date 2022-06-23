<template>
  <div id="app">
    <YaiphareLayout v-if="$route.meta.layout === 'yaiphareLayout'" />
    <UserLayout v-if="$route.meta.layout === 'userLayout'" />
    <EmployeeLayout v-if="$route.meta.layout === 'employeeLayout'" />
    <router-view v-if="$route.meta.layout === 'universal'"></router-view>
  </div>
</template>
<script>
import UserLayout from './layouts/UserLayout.vue'
import YaiphareLayout from './layouts/YaiphareLayout.vue'
import EmployeeLayout from './layouts/EmployeeLayout.vue'

export default {
  components: {
    UserLayout,
    YaiphareLayout,
    EmployeeLayout,
  },
}
</script>
