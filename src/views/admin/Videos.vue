<template>
  <div class="videos-page p-3">
    <b-table
      hover
      :items="items"
      :fields="fields"
      class="bg-white"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template #head(action)> <span></span></template>
      <template #cell(file_name)="data">
        <b-icon icon="folder-fill" variant="warning" class="mr-2"></b-icon>
        <span> {{ data.value }} </span>
      </template>
      <template #cell(action)>
        <div class="d-flex justify-content-end align-items-center">
          <b-button variant="outline-primary" size="sm">
            <b-icon icon="back"></b-icon>
          </b-button>
          <b-dropdown class="ml-2" size="sm" variant="primary" no-caret right>
            <template #button-content>
              <b-icon icon="three-dots"></b-icon>
            </template>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-primary text-white">
                  <b-icon icon="back"></b-icon>
                </div>
                <span class="ml-2">Copy Link</span>
              </div>
            </b-dropdown-item>
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
                <div class="dropdown-icon bg-danger text-white">
                  <b-icon icon="trash"></b-icon>
                </div>
                <span class="ml-2">Delete Video</span>
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

    <p class="text-black-50 text-center">No more files.</p>
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
          key: 'file_name',
          sortable: false,
        },
        {
          key: 'item_id',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        {
          key: 'created_at',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        'action',
      ],
      items: [
        // {
        //   file_name: 'something.mp4',
        //   item_id: 'fsadf45ff125w5r54',
        //   create_time: '6/4/2022 10:41PM',
        // },
        // {
        //   file_name: 'something.mp4',
        //   item_id: 'fsadf45ff125w5r54',
        //   create_time: '6/4/2022 10:41PM',
        // },
        // {
        //   file_name: 'fd.mp4',
        //   item_id: 'fsadf45ff125w5r54',
        //   create_time: '6/4/2022 10:41PM',
        // },
        // {
        //   file_name: 'something.mp4',
        //   item_id: 'fsadf45ff125w5r54',
        //   create_time: '6/4/2022 10:41PM',
        // },
      ],
    }
  },
  beforeMount() {
    this.getFiles()
  },
  methods:{
    getFiles() {
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/videos')
        .then((response) => {
          vm.items = response.data.data
          vm.items = response.data.data
          this.totalRows = response.data.total
        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.$toast.error(errors.response.data.message, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
          }
        })
    },
  }
}
</script>
