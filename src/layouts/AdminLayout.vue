<template>
  <div id="adminLayout">
    <div class="row no-gutters">
      <div class="col-12 border-bottom">
        <AdminHeader />
      </div>
      <div
        class="col-md-2 col-sm-12 bg-light border-right dashboard-height"
        :class="[$store.state.openSidebar ? '' : 'd-none']"
      >
        <TheSidebar />
      </div>
      <div
        class="col-sm-12 dashboard-height main-content"
        :class="[$store.state.openSidebar ? 'col-md-10' : 'col-md-12']"
      >
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
  data() {
    return {
      openSidebar: false,
    }
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

.transition {
  transition: 0.3s all ease;
}
</style>
