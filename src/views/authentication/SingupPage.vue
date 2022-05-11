<template>
  <div class="login-page d-flex justify-content-center">
    <div class="login-page-content mt-5 pt-5">
      <div class="login-page-title">
        <h1 class="text-center mb-5">Signup for {{ $appName }}</h1>
      </div>
      <div class="login-page-form">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Enter email"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            Sign Up
          </button>
          <div class="text-center mt-2">
            <router-link to="/signin">
              Already have an account? Sign In.
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
<style lang="scss">
.login-page-content {
  width: 450px;
}
</style>
