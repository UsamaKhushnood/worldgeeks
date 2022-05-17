<template>
  <div class="videos-page pb-5">
    <b-table hover :items="items" :fields="fields" class="bg-white">
      <template #head(action)> <span></span></template>
      <template #cell(file_name)="data">
        <span> {{ data.value }} </span>
      </template>
      <template #cell(action)>
        <div class="d-flex justify-content-end align-items-center">
          <b-dropdown class="ml-2" size="sm" variant="primary" no-caret right>
            <template #button-content>
              <b-icon icon="three-dots"></b-icon>
            </template>
            <b-dropdown-item>
              <span>View User</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <span>Approve</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <span>Reject</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    </b-table>
    <p class="text-black-50 text-center">No more Requests.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'Withdraw_request_id',
          sortable: false,
        },
        {
          key: 'user_id',
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
}
</script>
