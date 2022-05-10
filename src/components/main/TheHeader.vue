<template>
  <div class="the-header">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">MyBox</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="header-pages-links">
          <router-link to="/my-files" tag="b-nav-item"> My Files </router-link>
          <router-link to="/upload" tag="b-nav-item"> Upload </router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content> Username </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
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
