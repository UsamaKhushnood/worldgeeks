<template>
  <div class="site-settings p-3">
    <div>
      <div class="row">
        <div class="col-md-5 col-sm-12">
          <h5 class="mb-3">CPVM  (or CPM) Formula</h5>
          <b-form @submit.prevent="updateCpm()">
            <b-form-group>
              <b-form-input
                id="site_name"
                placeholder="CPM"
                v-model="cpm"
                required
              ></b-form-input>
            </b-form-group>
            <b-button
              variant="outline-primary"
              size="sm"
              type="submit"
              class="ml-auto d-block"
              >Update</b-button
            >
          </b-form>
          <hr />
    
      </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      cpm: ''
    }
  },
  beforeCreate(){
    this.$store.dispatch('HTTP_GET_REQUEST',{url:'admin/cpm'})
    .then((response) => {
        this.loading = false;
        this.cpm = response.data.data.value;
      })
      .catch((errors) => {
        this.loading = false;
        if (errors.response.data) {
          this.errors = errors.response.data.errors;
          this.$toast.error(errors.response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        }
    });
  },
  methods:{
    updateCpm(){
      const vm = this
      this.$http
        .put(process.env.VUE_APP_API_URL + '/admin/cpm/1',{
          value:this.cpm
        })
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

  }
}
</script>
