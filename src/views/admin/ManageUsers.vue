<template>
  <div class="manage-user">
    <b-table hover :items="items" :fields="fields" class="bg-white">
      <template #head(action)> <span></span></template>
      <template #cell(first_name)="data">
        <b-icon icon="person-fill" variant="primary" class="mr-2"></b-icon>
        <span> {{ data.item.first_name +' '+ data.item.last_name}} </span>
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
              <span>View Details</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <span>Ban Account</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <span @click="deleteUser(data.item.id)">Delete User</span>
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
  created(){
    this.getUsers()
  },
  methods: {
    getUsers() {
      const vm = this;
      this.$http
        .get(process.env.VUE_APP_API_URL + "/users")
        .then((response) => {
          console.log("data::", response.data.data);
          vm.items = response.data.data
        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.$toast.error(errors.response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
        });
    },
    deleteUser(id){
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
          var err = ''
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email
            console.log(err)
          }
        })
    }
  },
}
</script>
