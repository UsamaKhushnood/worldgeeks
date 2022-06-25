<template>
  <div class="add-new-user p-3">
    <div class="user-container">
      <div class="user-form-wrapper">
        <b-form  ref="form">
          <div class="row">
            <div class="col-12">
              <h3 class="text-center pb-4">{{heading}}</h3>
            </div>

            <div class="col-md-12">
              <b-form-group>
                <b-form-group>
                <b-form-input
                  name="title"
                  v-model="title"
                  placeholder="Select Title"
                >
                </b-form-input>
              </b-form-group>
              </b-form-group>
            </div>

            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-textarea
                  name="description"
                  placeholder="Add New Details"
                  v-model="description"
                  required
                ></b-textarea>
              </b-form-group>
            </div>
            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-form-file
                  accept="image/png, image/gif, image/jpeg"
                  type="file"
                  ref="file"
                  name="file"
                  required
                ></b-form-file>
              </b-form-group>
            </div>
            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-form-select
                  v-model="status"
                  :options="['on', 'off']"
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
      heading: 'News Mangement',
      url: null,
      title: null,
      status: null,
      description: null,
    }
  },
  mounted(){
    if(this.$route.params.id !='add'){
      this.getAdd(this.$route.params.id)
      this.heading="News Ads Mangement"
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
        vm.url=process.env.VUE_APP_API_URL + '/employee/news/' + vm.$route.params.id
      }else{
        vm.url=process.env.VUE_APP_API_URL + '/employee/news'
      }
      const formData = new FormData()
            
      for( var i = 0; i < this.$refs.file.files.length; i++ ){
              let file = this.$refs.file.files[i];
              formData.append('image', file);
          }
      formData.append("title", vm.title);
      formData.append("status", vm.status=='off' ? 0 :1);
      formData.append("description", vm.description);
      formData.append("_method", vm.$route.params.id !='add' ? "PUT":"POST");
      this.$http
        .post(vm.url,formData, {headers: {
            Authorization: "Bearer " + this.getUser.token,
            "Content-Type": "multipart/form-data",
         
          }})
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.description = null
          vm.title = null
          vm.$router.push({ path: "/employee/news-management" });
          
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
        .get(process.env.VUE_APP_API_URL + '/employee/news/'+id+'/edit')
        .then((response) => {
          vm.loading= false
          vm.description = response.data.description
          vm.title = response.data.title
          vm.status =  response.data.status ==1 ? 'on' :'off'
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
