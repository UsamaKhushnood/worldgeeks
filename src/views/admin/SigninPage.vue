<template>
  <div class="row no-gutters px-4 login-page px-4">
    <div class="col-md-5 col-sm-12 background p-5 position-relative">
      <h1 class="text-white">{{ $appName }}</h1>
      <p class="mb-0 rights-reserved text-light">
        &copy; {{ new Date().getFullYear() }}
        {{ $appName }}
        All rights reserved.
      </p>
    </div>
    <div
      class="col-md-7 col-sm-12 p-5 align-items-center d-flex justify-content-center"
    >
      <div class="login-page-content" style="width: 400px">
        <div class="login-page-title">
          <h1 class="mb-5">Login</h1>
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
              <!-- <router-link to="/forgot-password">Forgot Password?</router-link> -->
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Sign In
            </button>
          </form>
        </div>
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
  methods: {
    login() {
      const vm = this
      this.$http
        .post(process.env.VUE_APP_API_URL + '/login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log('data::', response.data.data)
          vm.$toast.success('User Login Successfully')
          const token = response.data.data.token
          localStorage.setItem('token', token)
          vm.$store.commit('SET_AUTH_TOKEN', token)
          vm.$store.commit('SET_USER', response.data.data)
          vm.$router.push({ path: 'admin/dashboard' })
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
<style lang="scss">
.login-page {
  height: 100vh;
  .background {
    background-image: url('../../assets/images/login.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .rights-reserved {
    position: absolute;
    bottom: 3rem;
  }
}
</style>
