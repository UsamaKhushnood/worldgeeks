<template>
  <div class="login-page d-flex justify-content-center">
    <div class="login-page-content mt-5 pt-5">
      <div class="login-page-title">
        <h1 class="text-center mb-5">Reset Password</h1>
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

          <button type="submit" class="btn btn-primary btn-block">Send</button>
          <router-link to="/signin" tag="button" class="btn btn-block btn-link">
            Back to Sign in
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
