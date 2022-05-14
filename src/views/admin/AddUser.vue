<template>
  <div class="add-new-user p-3">
    <b-row>
      <b-col cols="12" md="6">
        <b-form @submit="submit">
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
              placeholder="Password"
              v-model="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="confirm_password"
              placeholder="Confirm Password"
              v-model="confirm_password"
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
      confirm_password: null,
    }
  },
}
</script>
