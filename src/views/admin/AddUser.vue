<template>
  <div class="add-new-user p-3">
    <div class="user-container">
      <div class="user-form-wrapper">
        <b-form @submit.prevent="addUser">
          <div class="row">
            <div class="col-12">
              <h3 class="text-center pb-4">Add New User</h3>
            </div>
            <div class="col-md-6 col-sm-12">
              <b-form-group>
                <b-form-input
                  id="first_name"
                  placeholder="First Name"
                  v-model="first_name"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 col-sm-12">
              <b-form-group>
                <b-form-input
                  id="last_name"
                  placeholder="Last Name"
                  v-model="last_name"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-12">
              <b-form-group>
                <b-form-input
                  id="email"
                  placeholder="Email"
                  v-model="email"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-form-input
                  id="password"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-form-input
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  v-model="password_confirmation"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <b-button type="submit" variant="primary" class="w-100"
                >Add User</b-button
              >
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmation: null,
    }
  },
  methods: {
    addUser() {
      const vm = this
      this.$http
        .post(process.env.VUE_APP_API_URL + '/users', {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          first_name: this.first_name,
          last_name: this.last_name,
        })
        .then(() => {
        
          vm.$toast.success('User Added Successfully')
          vm.email = null
          vm.password = null
          vm.first_name = null
          vm.last_name = null
        })
        .catch((errors) => {
          if (errors.response.data) {
            this.$toast.error(errors.response.data.message, {
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
