<template>
  <div class="login-page d-flex justify-content-center">
    <div class="login-page-content mt-5 pt-5">
      <div class="login-page-title">
        <h1 class="text-center mb-5">Sign in to {{ $appName }}</h1>
      </div>
      <div class="login-page-form">
        <form @submit.prevent="login">
          <div class="form-group mb-2">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-3 text-right">
            <router-link to="/forgot-password">Forgot Password?</router-link>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Sign In
          </button>
          <router-link
            to="/signup"
            tag="button"
            class="btn btn-outline-primary btn-block"
          >
            Sign Up
          </router-link>
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
