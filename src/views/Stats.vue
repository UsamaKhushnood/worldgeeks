<template>
  <div class="user-stats">
    <div class="bg-light p-2">
      <p class="mb-0 text-capitalize container small text-center">
        Your daily CPM End Earning will update next day at 8:00 to 10:00 PM (
        india standard time)
      </p>
    </div>
    <div class="container mt-5">
      <div class="row" v-if="payment.status == 'approved'">
        <b-alert variant="success" show>
          <h4 class="alert-heading">Last Withdraw Status : Paid</h4></b-alert
        >
      </div>
      <div class="row" v-if="payment.status == 'pending'">
        <b-alert variant="info" show
          ><h4 class="alert-heading">
            Last Withdraw Status : Pending
          </h4></b-alert
        >
      </div>
      <div class="row">
        <div class="col-12 border p-3">
          <h4 v-if="getUser">
            Total Earnings: <span>{{ getUser.earning.earning }}</span>
          </h4>
          <div class="d-flex">
            {{ getUser.earning.balance }}
            <b-button
              v-if="
                getUser.earning.balance == 10 || getUser.earning.balance > 10
              "
              variant="primary"
              squared
              size="lg"
              class="ml-auto"
              @click="withdraw()"
            >
              Withdraw</b-button
            >
          </div>
        </div>
        <div class="col-12 border mt-5 pb-3">
          <b-table
            :current-page="currentPage"
            :per-page="perPage"
            responsive
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
              <!-- <div class="col-3">
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
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1,
      totalRows: 1,
      perPage: 5,
      pageOptions: [2, 5, 10, 15, { value: 100, text: '100' }],
      fields: [
        {
          key: 'created_at',
          sortable: false,
        },
        {
          label: 'Name',
          key: 'name',
          sortable: false,
        },
        {
          key: 'unique_play',
          sortable: false,
          // tdClass: 'sm-hidden',
          // thClass: 'sm-hidden',
        },
        {
          label: 'Plays (total)',
          key: 'plays',
          sortable: false,
          // tdClass: 'sm-hidden',
          // thClass: 'sm-hidden',
        },

        {
          label: 'Cpm',
          key: 'cpm',
          sortable: false,
          // tdClass: 'sm-hidden',
          // thClass: 'sm-hidden',
        },
        {
          label: 'Earning',
          key: 'earning',
          sortable: false,
          // tdClass: 'sm-hidden',
          // thClass: 'sm-hidden',
        },
      ],
      items: [],
      payment: [],
    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  mounted() {
    this.getStats()
  },
  methods: {
    getStats() {
      this.loading = true
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/statistics')
        .then((response) => {
          vm.items = response.data.data
          vm.payment = response.data.data.payment
          vm.loading = false
          // vm.totalRows = response.data.total;
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
    withdraw() {
      this.loading = true
      const vm = this
      this.$http
        .post(process.env.VUE_APP_API_URL + '/withdraw')
        .then((response) => {
          vm.loading = false
          vm.payment = response.data.data
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
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
}
</script>
