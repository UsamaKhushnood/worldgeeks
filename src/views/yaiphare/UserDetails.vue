<template>
  <div class="user-detials p-3">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="text-capitalize mb-0">username</h4>
              <p class="mb-0 text-secondary user-id">jfklsi893478</p>
            </div>

            <h6 class="text-capitalize mb-0 mt-3 text-primary">
              videos uploaded: <span class="text-dark ml-2">55</span>
            </h6>
            <h6 class="text-capitalize mb-0 text-primary">
              total Earning <span class="text-dark ml-2">$552</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div class="user-videos">
          <b-table
            :current-page="currentPage"
            :per-page="perPage"
            hover
            :items="items"
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
      </div>
      <div class="col-12 mt-3">
        <div class="user-earning">
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
      videosFields: [
        {
          key: 'video_link',
          sortable: false,
        },
        {
          key: 'create_time',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        'action',
      ],
      fields: [
        {
          key: 'Withdraw_request_id',
          sortable: false,
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
  mounted() {
    this.totalRows = this.items.length
  },
}
</script>
