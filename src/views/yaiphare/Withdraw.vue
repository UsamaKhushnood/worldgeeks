<template>
  <div class="videos-page p-3">
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      hover
      :items="items"
      :fields="fields"
      class="bg-white"
    >
      <template #head(action)> <span></span></template>
      <template #cell(file_name)="data">
        <span> {{ data.value }} </span>
      </template>
      <template #cell(action)="row">
        <div class="d-flex justify-content-end align-items-center">
          <b-dropdown class="ml-2" size="sm" variant="primary" no-caret right>
            <template #button-content>
              <b-icon icon="three-dots"></b-icon>
            </template>

            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-warning text-dark">
                  <b-icon icon="eye-fill"></b-icon>
                </div>
                <router-link :to="'/yaiphare/user-details/'+row.item.id">
                  <span class="ml-2">View User</span>
                </router-link>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-success text-white">
                  <b-icon icon="check-circle-fill"></b-icon>
                </div>
                <span class="ml-2">Approve</span>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-danger text-white">
                  <b-icon icon="x-circle-fill"></b-icon>
                </div>
                <span class="ml-2">Reject</span>
              </div>
            </b-dropdown-item>
          </b-dropdown>
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

    <p class="text-black-50 text-center">No more Requests.</p>
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
          key: 'Withdraw_request_id',
          sortable: false,
        },
        {
          key: 'user_id',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        {
          key: 'create_time',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        'action',
      ],
      items: [
        {
          Withdraw_request_id: '$10',
          user_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          Withdraw_request_id: '$10',
          user_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          Withdraw_request_id: '$10',
          user_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          Withdraw_request_id: '$10',
          user_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
      ],
    }
  },
  methods:{
    getWithDraw() {
      this.loading= true
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/admin/withdraw')
        .then((response) => {
          vm.loading= false
          vm.st = response.data.data
          vm.totalRows = response.data.total
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
  mounted() {
    this.getWithDraw()
  },
}
</script>
