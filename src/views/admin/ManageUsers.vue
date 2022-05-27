<template>
  <div class="manage-user p-3">
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      hover
      :items="items"
      :fields="fields"
      class="bg-white"
    >
      <template #head(action)> <span></span></template>
      <template #cell(first_name)="data">
        <b-icon icon="person-fill" variant="primary" class="mr-2"></b-icon>
        <span> {{ data.item.first_name + ' ' + data.item.last_name }} </span>
      </template>
      <template #cell(last_login)="data">
        <span> {{ data.item.last_login ? data.item.last_login : '---' }} </span>
      </template>

      <template #cell(action)="data">
        <div class="d-flex justify-content-end align-items-center">
          <b-button variant="outline-danger" size="sm">
            <b-icon icon="trash" @click="deleteUser(data.item.id)"></b-icon>
          </b-button>
          <b-dropdown class="ml-2" size="sm" variant="primary" no-caret right>
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
                <div class="dropdown-icon bg-warning text-dark">
                  <b-icon icon="dash-circle-fill"></b-icon>
                </div>
                <span class="ml-2">Ban User</span>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-danger text-white">
                  <b-icon icon="trash"></b-icon>
                </div>
                <span class="ml-2" @click="deleteUser(data.item.id)"
                  >Delete User</span
                >
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
          key: 'first_name',
          sortable: false,
        },
        {
          key: 'email',
          sortable: false,
        },
        {
          key: 'last_login',
          sortable: false,
        },
        'action',
      ],
      items: [],
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/users')
        .then((response) => {
          vm.items = response.data.data
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
    deleteUser(id) {
      const vm = this
      this.$http
        .delete(process.env.VUE_APP_API_URL + '/users/' + id)
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.getUsers()
        })
        .catch((errors) => {
          // var err = ''
          if (errors.response.data.errors) {
           
              vm.$toast.error('Invalid Request', {
                  position: 'top-right',
                  closeButton: 'button',
                  icon: true,
                  rtl: false,
                });
            // console.log(err)
          }
        })
    },
  },
  mounted() {
    this.totalRows = this.items.length
  },
}
</script>
