<template>
  <div class="manage-user p-3">
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
      <template #cell(user_name)="data">
        <span> {{ data.item.user_name + ' ' + data.item.last_name }} </span>
      </template>
      <template #cell(status)="data">
        <span> {{ data.item.status ? data.item.status : '---' }} </span>
      </template>

      <template #cell(action)>
        <div class="d-flex justify-content-end align-items-center">
          <b-button variant="outline-success" size="sm"> Approve </b-button>
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
          key: 'user_name',
          sortable: false,
        },
        {
          key: 'earning',
          sortable: false,
        },

        'action',
      ],
      items: [{ id: 1, user_name: 'John', earning: '$1000' }],
    }
  },
  created() {
    // this.getUsers()
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
            })
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
