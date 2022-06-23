<template>
  <div class="the-sidebar p-2 pt-4">
    <h5 class="ml-1 mb-3">Main</h5>
    <router-link to="/yaiphare/dashboard" class="sidebar-link">
      <b-icon icon="columns-gap"></b-icon> Dashboard</router-link
    >
    <router-link to="/employee/news-management" class="sidebar-link">
      <b-icon icon="collection-play"></b-icon>
      News</router-link
    >
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser']),

  
  },
}
</script>
<style lang="scss">
.sidebar-link {
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 10px;
  margin-bottom: 5px;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid #f8f9fa;
  transition: 0.2s all ease;
  &:hover,
  &.router-link-active {
    background-color: #e9e9e9;
    text-decoration: none;
    color: var(--blue);
    border: 2px solid var(--blue);
  }
}
</style>
