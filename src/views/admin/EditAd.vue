<template>
  <div class="add-new-user p-3">
    <div class="user-container">
      <div class="user-form-wrapper">
        <b-form @submit.prevent="addUser">
          <div class="row">
            <div class="col-12">
              <h3 class="text-center pb-4">Ad Mangement</h3>
            </div>

            <div class="col-md-12">
              <b-form-group>
                <b-form-input
                  id="email"
                  placeholder="Ad Location"
                  v-model="adLocation"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-textarea
                  id="confirm_password"
                  placeholder="Ad Code"
                  v-model="adCode"
                  required
                ></b-textarea>
              </b-form-group>
            </div>
            <div class="col-md-12 col-sm-12">
              <b-form-group>
                <b-form-select
                  v-model="selected"
                  :options="['Active', 'Inactive']"
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <b-button type="submit" variant="primary" class="w-100"
                >Save</b-button
              >
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 'Active',
      adLocation: null,
      adCode: null,
      email: null,
      password: null,
      password_confirmation: null,
    }
  },
}
</script>

<style>
.user-container {
  height: calc(100vh - 270px);
  width: 100%;
  display: flex;
  margin-top: calc(10vh);
  justify-content: center;
}

.user-form-wrapper {
  width: 600px;
  display: flex;
}

@media screen and (max-width: 600px) {
  .user-form-wrapper {
    width: calc(100% - 20px);
  }
}
</style>
