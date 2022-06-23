<template>
  <div class="dashboard p-3">
    <div class="row">
      <div
        class="col-md-3 col-sm-12 mb-sm-3 mb-md-0"
        v-for="(card, index) in cards"
        :key="index"
      >
    
      </div>
    </div>

  
  </div>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
  name: 'Dashboard',

  computed: {
    ...mapGetters(['getUser']),
  },
  beforeCreate(){
      // this.$router.go()
  },

  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            data: [36, 20, 12, 12, 20, 20, 15, 20, 20, 15, 20, 36],
            backgroundColor: ['#007bff '],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
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
