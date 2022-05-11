<template>
  <div class="the-sidebar p-2 pt-4">
    <h5 class="ml-1 mb-3">Main</h5>
    <router-link to="/admin/dashboard" class="sidebar-link">
      <b-icon icon="columns-gap"></b-icon> Dashboard</router-link
    >
    <router-link to="/admin/videos" class="sidebar-link">
      <b-icon icon="collection-play"></b-icon>
      Videos</router-link
    >
    <router-link to="/admin/withdraws" class="sidebar-link">
      <b-icon icon="arrow-left-right"></b-icon> Widthdraws</router-link
    >
    <h5 class="ml-1 my-3">Users</h5>
    <router-link to="/admin/manage-user" class="sidebar-link">
      <b-icon icon="people"></b-icon> Manage Users</router-link
    >
    <router-link to="/admin/add-user" class="sidebar-link">
      <b-icon icon="person"></b-icon> Add User</router-link
    >
    <h5 class="ml-1 my-3">Settings</h5>
    <router-link to="/admin/manage-user" class="sidebar-link">
      <b-icon icon="pen"></b-icon> Site Setting</router-link
    >
    <router-link to="/admin/add-user" class="sidebar-link">
      <b-icon icon="box-arrow-in-right"></b-icon> Earning Setting</router-link
    >
    <router-link to="/admin/add-user" class="sidebar-link">
      <b-icon icon="upload"></b-icon> Upload</router-link
    >
    <router-link to="/admin/add-user" class="sidebar-link">
      <b-icon icon="play-btn"></b-icon> Player</router-link
    >
  </div>
</template>
<style lang="scss">
.sidebar-link {
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 10px;
  margin-bottom: 5px;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid #f8f9fa;
  transition: 0.2s all ease;
  &:hover,
  &.router-link-active {
    background-color: #e9e9e9;
    text-decoration: none;
    color: var(--blue);
    border: 2px solid var(--blue);
  }
}
</style>
