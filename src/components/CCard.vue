<template>
  <div class="card p-3">
    <div class="card-label-box d-flex justify-content-between">
      <p class="card-label text-capitalize badge p-2" :class="`badge-${badge}`">
        {{ title }}
      </p>
      <b-icon class="h2" :icon="icon" aria-hidden="true"></b-icon>
    </div>
    <div class="card-quantity-box">
      <h2>{{ quantity }}</h2>
    </div>
    <div class="card-des-box">
      <h6 class="mb-0 text-capitalize">{{ description }}</h6>
    </div>

    <div class="card-icon-box"></div>
  </div>
</template>

<script>
export default {
  props: ['title', 'quantity', 'icon', 'description', 'badge'],
}
</script>

<style lang="scss">
.card {
  border-radius: 5px;
}
</style>
