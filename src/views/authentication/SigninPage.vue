<template>
  <div class="login-page px-4 d-flex justify-content-center">
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
              required
              placeholder="Enter email"
            />
            <!-- v-on:keyup="login" -->
             <span
              class="text-danger"
              v-if="errorMsg"
              id="input-2-live-feedback"
              >{{ errorMsg }}
            </span>
            <span
              class="text-danger"
              v-if="errors && errors.email"
              id="input-2-live-feedback"
              >{{ errors.email[0] }}</span
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="password"
              placeholder="Password"
            />
            
            <span
              class="text-danger"
              v-if="errors && errors.password"
              id="input-2-live-feedback"
              >{{ errors.password[0] }}
            </span>
           
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
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: '',
      message: '',
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    errorMsg(){
      return this.message
    }
  },
  created() {
    this.email = ''
    this.password = ''
    this.errors = ''
    this.message = ''
  },
  methods: {
    login() {
      const vm = this
      if (this.email === '' && this.password === '') {
        return
      }
      this.$http
        .post(process.env.VUE_APP_API_URL + '/login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
            // vm.$toast.success("User Login Successfully");
            const token = response.data.data.token;
            localStorage.setItem("token", token);
              vm.$store.commit("SET_AUTH_TOKEN", token);
              vm.$store.commit("SET_USER", response.data.data);
              // window.location.href ='/'
              response.data.data.user_type =='admin' ?
                window.location.href= '/admin':
                window.location.href= '/'
      
        })
        .catch((errors) => {
          if (errors.response.data) {
        
            this.message = errors.response.data.message
            this.errors = errors.response.data.errors

            // this.$toast.error(errors.response.data.message, {
            //   position: "top-right",
            //   closeButton: "button",
            //   icon: true,
            //   rtl: false,
            // });
          }
        })
    },
  },
}
</script>
<style lang="scss">
.login-page-content {
  width: 450px;
}
</style>
