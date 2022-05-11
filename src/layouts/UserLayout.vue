<template>
  <div id="userLayout">
    <TheHeader />
    <router-view />
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
