<template>
  <div class="text-center page-not-found">
    <div class="text-center pb-5 mb-5">
      <h1 class="text-center text-capitalize">
        <span class="text-danger">
          <b-icon icon="emoji-frown"></b-icon>
        </span>
        <span class="num text-dark">
          4<span class="text-danger m-0 p-0">0</span>4
        </span>
        <br />
        <span class="text text-dark"> page not found </span>
      </h1>
      <b-button variant="dark" class="mt-4" @click="$router.go(-1)">
        <b-icon icon="arrow-return-left" class="mr-2"></b-icon> Go
        Back</b-button
      >
    </div>
  </div>
</template>
<style scoped>
.page-not-found {
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: fantasy;
  font-size: 60px;
}
</style>
