<template>
  <div
    class="the-footer d-flex align-items-center p-3 bg-light border-top small"
  >
    Copyright &copy; {{ new Date().getFullYear() }} {{ $appName }}. All rights
    Reserved.
  </div>
</template>
<style>
.the-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
