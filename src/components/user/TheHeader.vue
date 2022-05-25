<template>
  <div class="the-header">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/" tag="b-navbar-brand"> {{ $appName }} </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="header-pages-links">
          <router-link to="/" tag="b-nav-item" exact class="px-2">
            My Files
          </router-link>
          <router-link to="/upload" tag="b-nav-item" class="px-2">
            Upload
          </router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/admin" tag="b-nav-item" class="px-2">
            Admin
          </router-link>
          <b-nav-item-dropdown right>
            <template #button-content> Username </template>
            <router-link tag="b-dropdown-item" to="/profile">
              Profile
            </router-link>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
          <router-link to="/signin" tag="b-nav-item"> Sign In </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

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
