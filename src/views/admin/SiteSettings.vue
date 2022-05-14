<template>
  <div class="site-settings p-3">
    <div>
      <div class="row">
        <div class="col-md-6">
          <b-form @submit="submit">
            <b-form-group>
              <b-form-input
                id="site_name"
                placeholder="Site Name"
                v-model="site_name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                id="site_description"
                placeholder="Site Description"
                v-model="site_description"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
