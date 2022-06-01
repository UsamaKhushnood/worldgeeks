<template>
  <div class="the-header">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/" tag="b-navbar-brand"> {{ $appName }} </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="header-pages-links" v-if="getUser !== ''">
          <router-link
            v-if="getUser && getUser.user_type === 'user'"
            to="/"
            tag="b-nav-item"
            exact
            class="px-2"
          >
            My Files
          </router-link>
          <router-link
            v-if="getUser && getUser.user_type === 'user'"
            to="/upload"
            tag="b-nav-item"
            class="px-2"
          >
            Upload
          </router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link
            v-if="getUser !== null"
            to="/admin"
            tag="b-nav-item"
            class="px-2"
          >
            {{ getUser.first_name }}
          </router-link>
          <b-nav-item-dropdown right v-if="getUser !== null">
            <template #button-content> {{ getUser.first_name }} </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#"  @click="logout()">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <router-link to="/signin" v-if="getUser == null"  tag="b-nav-item"> Sign In </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    logout() {
      const vm = this
      this.$http
        .post(process.env.VUE_APP_API_URL + '/logout')
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.$router.push({ path: '/signin' })
          localStorage.setItem('token', null)
          vm.$store.commit('SET_AUTH_TOKEN', null)
          vm.$store.commit('SET_USER', null)
        })
        .catch((errors) => {
          if (errors)
            this.$toast.error(errors.message, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
        })
    },
  }
}
</script>
<style lang="scss">
.header-pages-links {
  .router-link-active {
    background: #0000003b;
    font-weight: 600;
    a {
      color: #fff !important;
    }
  }
}
</style>
