<template>
  <div class="manage-user">
    <b-table hover :items="items" :fields="fields" class="bg-white">
      <template #head(action)> <span></span></template>
      <template #cell(user_name)="data">
        <b-icon icon="person-fill" variant="primary" class="mr-2"></b-icon>
        <span> {{ data.value }} </span>
      </template>
      <template #cell(action)>
        <div class="d-flex justify-content-end align-items-center">
          <b-button variant="outline-danger" size="sm">
            <b-icon icon="trash"></b-icon>
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
                <div class="dropdown-icon bg-warning text-white">
                  <b-icon icon="pencil-fill"></b-icon>
                </div>
                <span class="ml-2">Rename</span>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-success text-white">
                  <b-icon icon="cloud-download-fill"></b-icon>
                </div>
                <span class="ml-2">Download</span>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'user_name',
          sortable: false,
        },
        {
          key: 'user_id',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },

        'action',
      ],
      items: [
        {
          user_name: 'Username',
          user_id: 'fsadf45ff125w5r54',
          create_date: '6/4/2022 10:41PM',
        },
        {
          user_name: 'Username',
          user_id: 'fsadf45ff125w5r54',
          create_date: '6/4/2022 10:41PM',
        },
        {
          user_name: 'Username',
          user_id: 'fsadf45ff125w5r54',
          create_date: '6/4/2022 10:41PM',
        },
        {
          user_name: 'Username',
          user_id: 'fsadf45ff125w5r54',
          create_date: '6/4/2022 10:41PM',
        },
      ],
    }
  },
}
</script>
