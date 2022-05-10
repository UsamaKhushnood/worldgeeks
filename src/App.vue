<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from './components/main/TheHeader.vue'
import TheFooter from './components/main/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
