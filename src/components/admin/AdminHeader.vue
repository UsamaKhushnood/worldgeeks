<template>
  <div class="admin-header">
    <b-navbar toggleable="lg" type="light" variant="light">
      <router-link to="/admin/dashboard" tag="h1" class="navbar-brand mb-0">{{
        $appName
      }}</router-link>

      <b-navbar-nav>
        <b-nav-item>
          <b-btn
            variant="outline-dark"
            size="sm"
            v-if="!$store.state.openSidebar"
            @click="$store.dispatch('toggleSidebar', true)"
          >
            <b-icon icon="list"></b-icon>
          </b-btn>
          <b-btn
            variant="outline-dark"
            size="sm"
            v-else
            @click="$store.dispatch('toggleSidebar', false)"
          >
            <b-icon icon="x"></b-icon>
          </b-btn>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="getUser !== null" >
          <template #button-content>
            <b-avatar variant="dark" text="U" size="2em" class="mr-2"></b-avatar
            >{{getUser.first_name}} 
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click.prevent="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser']),
  },
  methods:{
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
          localStorage.setItem("token", null);
          vm.$store.commit("SET_AUTH_TOKEN", null);
          vm.$store.commit("SET_USER", null);
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