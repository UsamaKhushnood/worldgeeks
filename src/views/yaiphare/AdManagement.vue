<template>
  <div class="manage-user p-3 ">
    <router-link to="/yaiphare/ad-mangement/add">
      <b-button variant="outline-primary"  class="float-right mb-3" >
        Add AdManagement
      </b-button>
    </router-link>
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      hover
      :items="items"
      :fields="fields"
      class="bg-white"
    >
      <template #head(action)> <span></span></template>
      <template #cell(ad_title)="data">
        <span> {{ data.item.ad_title + ' ' + data.item.last_name }} </span>
      </template>
      <template #cell(status)="data">
        <span> {{ data.item.status ==1 ? "Active" : 'DisActive' }} </span>
      </template>

      <template #cell(action)="data">
        <div class="d-flex justify-content-end align-items-center">
          <router-link :to="`ad-mangement/${data.item.id}`">
            <b-button variant="outline-success" size="sm">
              <b-icon icon="pencil"></b-icon> </b-button
          ></router-link>
        </div>
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
          key: 'title',
          sortable: false,
        },
        {
          key: 'size',
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
        .get(process.env.VUE_APP_API_URL + '/admin/ads')
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
