<template>
  <div class="manage-user p-3 ">
    
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      hover
      responsive
      :items="items"
      :fields="fields"
      class="bg-white"
    >
      <template #head(action)> <span></span></template>

      <template #cell(video_name)="data">
        <span> {{ data.item.video.orignal_name  }} </span>
      </template>

    </b-table>
    <div class="pagination-options ml-auto">
      <div class="row">
        <div class="col-3">
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </div>
        <div class="col-9">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalRows: 1,
      perPage: 5,
      pageOptions: [2, 5, 10, 15, { value: 100, text: '100' }],
      fields: [
        {
          key: 'id',
          sortable: false,
          // tdClass: 'sm-hidden',
        },
        {
          key: 'video_id',
          sortable: false,
        },
        {
          key: 'video_name',
          sortable: false,
        },
        {
          key: 'ip_address',
          sortable: false,
        },
        {
          key: 'status',
          sortable: false,
        },
        'action',
      ],
      items: [],
    }
  },
  created() {
    this.getAdd()
  },
  methods: {
      getAdd() {
      this.loading= true
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/report')
        .then((response) => {
          vm.loading= false
          vm.items = response.data.data
          vm.totalRows = response.data.total
          vm.perPage = response.data.per_page
        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.loading= false
            vm.$toast.error(errors.response.data.message, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
          }
        })
    },
    

  },
 
}
</script>
