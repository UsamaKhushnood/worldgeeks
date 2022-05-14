<template>
  <div class="videos-page pb-5">
    <b-table hover :items="items" :fields="fields" class="bg-white">
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
    <p class="text-black-50 text-center">No more files.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          key: 'create_time',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        'action',
      ],
      items: [
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
      ],
    }
  },
}
</script>
