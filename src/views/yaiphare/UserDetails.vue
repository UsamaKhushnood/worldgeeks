<template>
  <div class="user-detials p-3">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="text-capitalize mb-0">username</h4>
              <p class="mb-0 text-secondary user-id">{{user.first_name}}</p>
            </div>

            <h6 class="text-capitalize mb-0 mt-3 text-primary">
              videos uploaded: <span class="text-dark ml-2">{{videos.data.length}}</span>
            </h6>
            <h6 class="text-capitalize mb-0 text-primary">
              total Earning <span class="text-dark ml-2">${{user.earning.earning}}</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <h4>Video List</h4>
        <div class="user-videos">
          <b-table
            :current-page="currentPage"
            :per-page="perPage"
            responsive
            hover
            :items="videos.data"
            :fields="videosFields"
            class="bg-white"
          >
            <template #head(action)> <span></span></template>
            <template #cell(file_name)="data">
              <span> {{ data.value }} </span>
            </template>
            <template #cell(action)>
              <div class="d-flex justify-content-end align-items-center">
                <b-dropdown
                  class="ml-2"
                  size="sm"
                  variant="primary"
                  no-caret
                  right
                >
                  <template #button-content>
                    <b-icon icon="three-dots"></b-icon>
                  </template>

                  <b-dropdown-item>
                    <div class="d-flex">
                      <div class="dropdown-icon bg-warning text-dark">
                        <b-icon icon="back"></b-icon>
                      </div>
                      <span class="ml-2">Copy Link</span>
                    </div>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <div class="d-flex">
                      <div class="dropdown-icon bg-success text-white">
                        <b-icon icon="eye-fill"></b-icon>
                      </div>
                      <span class="ml-2">View</span>
                    </div>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <div class="d-flex">
                      <div class="dropdown-icon bg-danger text-white">
                        <b-icon icon="trash"></b-icon>
                      </div>
                      <span class="ml-2">Delete</span>
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
                  v-model="videoPerPage"
                  :options="pageOptions"
                  size="sm"
                ></b-form-select>
              </div>
              <div class="col-9">
                <b-pagination
                  v-model="videoCurrentPage"
                  :total-rows="videoTotalRows"
                  :per-page="videoPerPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4 ">
        <h4>Withdraws List</h4>
        <div class="user-earning">
          <b-table
            :current-page="currentPage"
            :per-page="withdrawsPerPage"
            hover
            responsive
            :items="withdraws.data"
            :fields="fields"
            class="bg-white"
          >
            <template #head(action)> <span></span></template>
        
            <template #cell(action)>
              <div class="d-flex justify-content-end align-items-center">
                <b-dropdown
                  class="ml-2"
                  size="sm"
                  variant="primary"
                  no-caret
                  right
                >
                  <template #button-content>
                    <b-icon icon="three-dots"></b-icon>
                  </template>

                  <b-dropdown-item>
                    <div class="d-flex">
                      <div class="dropdown-icon bg-warning text-dark">
                        <b-icon icon="eye-fill"></b-icon>
                      </div>
                      <span class="ml-2">View User</span>
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
                  v-model="withdrawsPerPage"
                  :options="withdrawsPageOptions"
                  size="sm"
                ></b-form-select>
              </div>
              <div class="col-9">
                <b-pagination
                  v-model="withdrawsCurrentPage"
                  :total-rows="withdrawsTotalRows"
                  :per-page="withdrawsPerPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4 ">
        <h4>User Statistics List</h4>
        <div class="user-earning">
          <b-table
            responsive
            :current-page="staticCurrentPage"
            :per-page="staticPerPage"
            hover
            :items="statistics.data"
            :fields="staticfields"
            class="bg-white"
          >
            <template #head(action)> <span></span></template>
        
            <template #cell(action)>
              <div class="d-flex justify-content-end align-items-center">
                <b-dropdown
                  class="ml-2"
                  size="sm"
                  variant="primary"
                  no-caret
                  right
                >
                  <template #button-content>
                    <b-icon icon="three-dots"></b-icon>
                  </template>

                  <b-dropdown-item>
                    <div class="d-flex">
                      <div class="dropdown-icon bg-warning text-dark">
                        <b-icon icon="eye-fill"></b-icon>
                      </div>
                      <span class="ml-2">View User</span>
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
                  v-model="statisticsPerPage"
                  :options="statisticsPageOptions"
                  size="sm"
                ></b-form-select>
              </div>
              <div class="col-9">
                <b-pagination
                  v-model="statisticsCurrentPage"
                  :total-rows="statisticsTotalRows"
                  :per-page="statisticsPerPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      withdrawsCurrentPage: 1,
      withdrawsTotalRows: 1,
      withdrawsPerPage: 5,
      statisticsCurrentPage: 1,
      statisticsTotalRows: 1,
      statisticsPerPage: 5,
      videoPerPage: 5,
      videoCurrentPage: 1,
      videoTotalRows: 1,
      pageOptions: [2, 5, 10, 15, { value: 100, text: '100' }],
      videosFields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "item_id",
          sortable: true,
          tdClass: "sm-hidden",
          thClass: "sm-hidden",
        },
        {
          key: "created_at",
          sortable: true,
          tdClass: "sm-hidden",
          thClass: "sm-hidden",
        },
      ],
      fields: [
            {
          key: 'id',
          sortable: false,
        },
        {
          key: 'user_id',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
 
        {
          key: 'created_at',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        }
      ],
      staticFields: [
            {
          key: 'id',
          sortable: false,
        },
        {
          key: 'user_id',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
 
        {
          key: 'created_at',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        }
      ],
      staticItems: [
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
      statistics:[],
      videos:[],
      withdraws:[],
      user:null
    }
  },
  methods:{
    getUser() {
      let vm = this
      let id = this.$route.params.id
      vm.$http
        .get(process.env.VUE_APP_API_URL+'/admin/users/'+id)
        .then((response) => {
        
          vm.user = response.data.data
          vm.videos = response.data.video
          vm.statistics = response.data.statistics
          vm.withdraws = response.data.withdraw
          vm.loading = false
        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.loading = false
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
    this.getUser()
  },
}
</script>
