<template>
  <div class="add-new-user p-3">
    <div class="user-container">
      <div class="user-form-wrapper">
        <b-form >
          <div class="row">
            <div class="col-12">
              <h3 class="text-center pb-4">{{heading}}</h3>
            </div>

            <div class="col-md-12">
              <b-form-group>
                <b-form-group>
                <b-form-select
                  v-model="size"
                  :options="['752 x 33', '200 x 200']"
                  placeholder="Select Location"
                >
                <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>

                </b-form-select>
              </b-form-group>
              </b-form-group>
            </div>

            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-textarea
                  id="confirm_password"
                  placeholder="Ad Code"
                  v-model="title"
                  required
                ></b-textarea>
              </b-form-group>
            </div>
            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-form-select
                  v-model="status"
                  :options="['Active', 'Inactive']"
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <b-button type="submit" variant="primary" class="w-100"
              @click.prevent="addAdd()"
                >Save</b-button
              >
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      heading: 'Ads Mangement',
      status: 'Active',
      url: null,
      title: null,
      size: null,
    }
  },
  mounted(){
    if(this.$route.params.id !='add'){
      this.getAdd(this.$route.params.id)
      this.heading="Edit Ads Mangement"
    }
  },
  computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
    addAdd() {
      if(this.title =='' && this.size==''){
        return;
      }
      const vm = this
    
      if(vm.$route.params.id !='add'){
        vm.url=process.env.VUE_APP_API_URL + '/admin/ads/' + vm.$route.params.id
      }else{
        vm.url=process.env.VUE_APP_API_URL + '/admin/ads'
      }
    
      this.$http
        .post(vm.url,{
          status: this.status == "Active" ? "1" : "0",
          title: this.title,
          size: this.size,
          _method:vm.$route.params.id !='add' ? "PUT":"POST"
        }, {headers: {
            Authorization: "Bearer " + this.getUser.token,
          }})
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.size = null
          vm.title = null
          vm.$router.push({ path: "/yaiphare" });
        })
        .catch((errors) => {
          if (errors.response.data.errors) {
            vm.$toast.error('Invalid Request', {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
          }
        })
    },
    getAdd(id) {
      this.loading= true
      const vm = this
      this.$http
        .get(process.env.VUE_APP_API_URL + '/admin/ads/'+id)
        .then((response) => {
          vm.loading= false
          let st = response.data.status
          vm.status = st ==1 ? "Active" : "Inactive",
          vm.size = response.data.size
          vm.title = response.data.title
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
  }
}
</script>

<style>
.user-container {
  height: calc(100vh - 270px);
  width: 100%;
  display: flex;
  margin-top: calc(10vh);
  justify-content: center;
}

.user-form-wrapper {
  width: 600px;
  display: flex;
}

@media screen and (max-width: 600px) {
  .user-form-wrapper {
    width: calc(100% - 20px);
  }
}
</style>
