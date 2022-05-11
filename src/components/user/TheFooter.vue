<template>
  <div
    class="the-footer d-flex justify-content-center align-items-center p-3 bg-light"
  >
    <b-icon icon="collection-fill" class="h5 mb-0 mr-2"></b-icon> Copyright
    &copy; {{ new Date().getFullYear() }} {{ $appName }}. All rights Reserved.
  </div>
</template>
<style>
.the-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
