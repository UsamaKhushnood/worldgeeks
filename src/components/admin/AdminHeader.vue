<template>
  <div class="admin-header">
    <b-navbar toggleable="lg" type="light" variant="light">
      <router-link to="/admin/dashboard" tag="h1" class="navbar-brand mb-0">{{
        $appName
      }}</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <b-nav-item>
          <b-icon icon="chevron-double-left" class="ml-5"></b-icon>
        </b-nav-item>
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-avatar
                variant="dark"
                text="U"
                size="2em"
                class="mr-2"
              ></b-avatar
              >Username
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
