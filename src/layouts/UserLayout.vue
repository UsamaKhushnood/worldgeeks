<template>
  <div id="userLayout">
    <TheHeader />
    <div class="content-container">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '../components/user/TheHeader.vue'
import TheFooter from '../components/user/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
<style>
.content-container {
  min-height: calc(100vh - 110px);
}
</style>
