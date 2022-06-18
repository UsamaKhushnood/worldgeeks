<template>
  <div class="user-stats">
    <div class="bg-light p-2">
      <p class="mb-0 text-capitalize container small text-center">
        Your daily CPM End Earning will update next day at 8:00 to 10:00 PM (
        india standard time)
      </p>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 border p-3">
          <h4>Total Earnings: <span>1431</span></h4>
          <div class="d-flex">
            <b-button variant="primary" squared size="lg" class="ml-auto"
              >Last Withdraw</b-button
            >
          </div>
        </div>
        <div class="col-12 border mt-5 pb-3">
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
      fields: [
        {
          key: 'date',
          sortable: false,
        },
        {
          key: 'unique_plays',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        {
          key: 'plays (total)',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        'CPM',
        'earnings',
      ],
      items: [
        {
          date: '2020-01-01',
          unique_plays: '10',
          'plays (total)': '100',
          CPM: '10',
          earnings: '100',
        },
        {
          date: '2020-01-01',
          unique_plays: '10',
          'plays (total)': '100',
          CPM: '10',
          earnings: '100',
        },
        {
          date: '2020-01-01',
          unique_plays: '10',
          'plays (total)': '100',
          CPM: '10',
          earnings: '100',
        },
      ],
    }
  },
  mounted() {
    this.totalRows = this.items.length
  },
}
</script>
