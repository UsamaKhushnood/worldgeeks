<template>
  <div class="dashboard p-3">
    <div class="row">
      <div
        class="col-md-3 col-sm-12 mb-sm-3 mb-md-0"
        v-for="(card, index) in cards"
        :key="index"
      >
        <CCard
          :title="card.title"
          :quantity="card.quantity"
          :description="card.description"
          :icon="card.icon"
          :badge="card.badge"
        />
      </div>
    </div>

    <div class="row p-3">
      <div class="col-md-4 col-sm-12 mb-md-0 mb-sm-3 card">
        <div class="row p-3 videos-sizes-box">
          <div class="col-6 flex-column d-flex justify-content-center">
            <h6>All Video Sizes</h6>
            <h2>30.36MB</h2>
            <p class="mb-0">Right Now</p>
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <b-icon
              class="building-icon"
              icon="building"
              aria-hidden="true"
            ></b-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CCard from '@/components/CCard.vue'
export default {
  name: 'Dashboard',
  components: { CCard },
  data() {
    return {
      cards: [
        {
          title: 'Videos',
          quantity: '7',
          description: 'all videos downlaoded',
          icon: 'building',
          badge: 'danger',
        },
        {
          title: 'Users',
          quantity: '14',
          description: 'Registered Users',
          icon: 'people-fill',
          badge: 'info',
        },
        {
          title: 'Payments',
          quantity: '40087$',
          description: 'Successfuly Payments',
          icon: 'currency-dollar',
          badge: 'success',
        },
        {
          title: 'Awaiting Withdraw',
          quantity: '0',
          description: 'Pending Items',
          icon: 'file-zip-fill',
          badge: 'primary',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.building-icon {
  font-size: 100px;
}

.videos-sizes-box {
  height: 200px !important;
}
</style>
