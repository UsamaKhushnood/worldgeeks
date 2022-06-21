<template>
  <div class="site-settings p-3">
    <div>
      <div class="row">
        <div class="col-md-5 col-sm-12">
          <h5 class="mb-3">Website Details</h5>
          <b-form>
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
            <b-button
              variant="outline-primary"
              size="sm"
              class="ml-auto d-block"
              >Update</b-button
            >
          </b-form>
          <hr />
          <h5 class="mb-3">Upload Warning Message</h5>
          <div class="bg-white">
            <VueEditor v-model="uploadMsg" />
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <h5 class="mb-3">DMCA</h5>
          <div class="bg-white">
            <VueEditor v-model="dmca" />
          </div>
          <h5 class="my-3">Terms and Services</h5>
          <div class="bg-white">
            <VueEditor v-model="terms" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: { VueEditor },
  data() {
    return {
      site_name: '',
      site_description: '',
      uploadMsg: '',
      dmca: '',
      terms: '',
    }
  },
}
</script>
