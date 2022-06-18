<template>
  <div class="admin-profile p-3">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title mb-0">Edit Profile</h4>
            <p class="card-category mb-0">Complete your profile</p>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="row flex-column">
                    <div class="col-12">
                      <h5 class="card-title">Change Name</h5>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">First Name</label>
                        <input v-model="first_name"  type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">Last Name</label>
                        <input v-model="last_name" type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8 text-right">
                      <b-button variant="primary" size="sm" @click="UpdateName()">Update</b-button>
                    </div>
                    <div class="col-12">
                      <h5 class="card-title">Change Email</h5>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">Email address</label>
                        <input v-model="email" type="email" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8 text-right">
                      <b-button variant="primary" size="sm" @click="UpdateEmail()">Update</b-button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="row flex-column">
                    <div class="col-12">
                      <h5 class="card-title">Change Password</h5>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">Old Password</label>
                        <input v-model="current_password" type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">New Password</label>
                        <input v-model="new_password"  type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating"
                          >Confirm Password</label
                        >
                        <input v-model="confirm_password"  type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8 text-right">
                      <b-button variant="danger" size="sm" @click="UpdatePassword()">Update</b-button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading:false,
      first_name: '',
      last_name: '',
      email: '',
      current_password: '',
      new_password: '',
      confirm_password: '',
      playload: {},
      url: ''
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  beforeMount() {
    this.getFiles();
  },
  methods: {
    updatePassword(text) {
      switch (text){
        case "updatePassword":
          this.url ="/admin"
          this.playload={
            current_password: this.current_password,
            new_password: this.new_password,
            confirm_password: this.confirm_password
          }
        break;

        case "updateEmail":
          this.url ="/admin"
          this.playload={
            email: this.email,
          }
        break;
        case "updateName":
          this.url ="/admin"
          this.playload={
            first_name: this.first_name,
            last_name: this.last_name,
          }
        break;
      default:
        this.url=''
        this.playload={}
      }
      
      const vm = this;
      this.$http
        .post(process.env.VUE_APP_API_URL + this.url ,this.playload)
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
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
   
  },
};
</script>
