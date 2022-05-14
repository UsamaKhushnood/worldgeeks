<template>
  <div id="adminLayout">
    <div class="row no-gutters">
      <div class="col-12 border-bottom">
        <AdminHeader />
      </div>
      <div class="col-2 bg-light border-right dashboard-height">
        <TheSidebar />
      </div>
      <div class="col-10 dashboard-height main-content">
        <h6 class="p-3 border-bottom text-primary mb-0">{{ $route.name }}</h6>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import AdminHeader from '../components/admin/AdminHeader.vue'
import TheSidebar from '../components/admin/TheSidebar.vue'
export default {
  components: {
    AdminHeader,
    TheSidebar,
  },
}
</script>

<style lang="scss">
.dashboard-height {
  height: calc(100vh - 65px);
  overflow-y: auto;
}

.main-content {
  background: #eaf0f8;
}
</style>
