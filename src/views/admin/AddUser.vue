<template>
  <div class="add-new-user p-3">
    <b-row>
      <b-col cols="12" md="6">
        <b-form @submit.prevent="addUser">
          <b-form-group>
            <b-form-input
              id="first_name"
              placeholder="First Name"
              v-model="first_name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="last_name"
              placeholder="Last Name"
              v-model="last_name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="email"
              placeholder="Email"
              v-model="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              v-model="password_confirmation"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" class="w-100"
            >Add User</b-button
          >
        </b-form>
      </b-col>
    </b-row>
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
      const vm = this;
      this.$http
        .post(process.env.VUE_APP_API_URL + "/users", {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          first_name: this.first_name,
          last_name: this.last_name,
        })
        .then((response) => {
          console.log("data::", response.data.data);
            vm.$toast.success("User Added Successfully");
            vm.email =null
            vm.password =null
            vm.first_name =null
            vm.last_name =null
        })
        .catch((errors) => {
          if (errors.response.data) {
            this.$toast.error(errors.response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
        });
    },
  },
}
</script>
