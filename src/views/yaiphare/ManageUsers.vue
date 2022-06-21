<template>
  <div class="manage-user p-3">
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      hover
      :busy="loading"
      :items="items.data"
      :fields="fields"
      class="bg-white"
    >
      <template #table-busy>
        <div class="text-center text-dark my-2">
          <b-spinner class="align-middle"></b-spinner>
        </div>
      </template>
      <template #head(action)> <span></span></template>
      <template #cell(first_name)="data">
        <b-icon icon="person-fill" variant="primary" class="mr-2"></b-icon>
        <span> {{ data.item.first_name + ' ' + data.item.last_name }} </span>
      </template>
      <template #cell(block)="data">
        <span> {{ data.item.block ==1 ? 'Block' : 'Active' }} </span>
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
                <span class="ml-2"> <router-link :to="'/yaiphare/user-details/'+data.item.id">View User</router-link> </span>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-warning text-dark">
                  <b-icon icon="dash-circle-fill"></b-icon>
                </div>
                <span class="ml-2" @click="blockUser(data.item.id)">Ban User</span>
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
      loading: false,
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
          label: 'User Status',
          key: 'block',
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
      this.loading= true
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/admin/users')
        .then((response) => {
          vm.loading= false
          vm.items = response.data.data
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
    deleteUser(id) {
      const vm = this
      this.$http
        .delete(process.env.VUE_APP_API_URL + '/admin/users/' + id)
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
    blockUser(id) {
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/admin/block-user/'+ id)
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

}
</script>
