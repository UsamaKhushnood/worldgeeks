<template>
  <div class="upload p-3">
    <div class="image-uploader d-flex justify-content-center my-5">
      <vue-upload-multiple-image
        dragText="Drag &amp; Drop your files here"
        browseText="or Click to upload"
        primaryText="Default"
        markIsPrimaryText="Set as default"
        popupText="This image will be displayed as default"
        dropText="Drop your files here..."
        maxImage="5"
        @upload-success="uploadImageSuccess"
        @before-remove="beforeRemove"
        @edit-image="editImage"
        @data-change="dataChange"
        :data-images="uploadedImages"
      ></vue-upload-multiple-image>
    </div>

    <div class="paste-url">
      <div class="d-flex flex-column-xs">
        <b-form-input
          v-model="text"
          placeholder="Paste URL here"
        ></b-form-input>
        <b-button
          title="Upload file from URL"
          variant="primary"
          class="ml-md-2 ml-sm-0 mt-xs-2"
        >
          <span class="d-flex align-items-center">
            <b-icon
              icon="cloud-upload"
              aria-hidden="true"
              class="mr-2"
            ></b-icon>
            Upload</span
          ></b-button
        >
      </div>
    </div>

    <div class="uploaded-content mt-5">
      <b-table
        :current-page="currentPage"
        :per-page="perPage"
        hover
        :items="items"
        :fields="fields"
        class="bg-white"
      >
        <template #head(action)> <span></span></template>
        <template #cell(file_name)="data">
          <b-icon icon="folder-fill" variant="warning" class="mr-2"></b-icon>
          <span> {{ data.value }} </span>
        </template>
        <template #cell(action)>
          <div class="d-flex justify-content-end align-items-center">
            <b-button variant="outline-primary" size="sm">
              <b-icon icon="back"></b-icon>
            </b-button>
            <b-dropdown class="ml-2" size="sm" variant="primary" no-caret right>
              <template #button-content>
                <b-icon icon="three-dots"></b-icon>
              </template>
              <b-dropdown-item>
                <div class="d-flex">
                  <div class="dropdown-icon bg-primary text-white">
                    <b-icon icon="back"></b-icon>
                  </div>
                  <span class="ml-2">Copy Link</span>
                </div>
              </b-dropdown-item>

              <b-dropdown-item>
                <div class="d-flex">
                  <div class="dropdown-icon bg-danger text-white">
                    <b-icon icon="trash"></b-icon>
                  </div>
                  <span class="ml-2">Delete Video</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
      </b-table>
      <div class="pagination-options ml-auto">
        <div class="row">
          <div class="col-3">
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
            ></b-form-select>
          </div>
          <div class="col-9">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="fill"
              size="sm"
              class="my-0"
            ></b-pagination>
          </div>
        </div>
      </div>
      <p class="text-black-50 text-center">No more files.</p>
    </div>
  </div>
</template>
<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
export default {
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      currentPage: 1,
      totalRows: 1,
      perPage: 5,
      pageOptions: [2, 5, 10, 15, { value: 100, text: '100' }],
      imageList: [],
      uploadedImages: [],
      fields: [
        {
          key: 'file_name',
          sortable: false,
        },
        {
          key: 'item_id',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        {
          key: 'create_time',
          sortable: false,
          tdClass: 'sm-hidden',
          thClass: 'sm-hidden',
        },
        'action',
      ],
      items: [
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
        {
          file_name: 'something.mp4',
          item_id: 'fsadf45ff125w5r54',
          create_time: '6/4/2022 10:41PM',
        },
      ],
    }
  },
  methods: {
    /* eslint-disable no-console */
    uploadImageSuccess(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'upload success')
      this.imageList.push(fileList[index].path)
    },
    beforeRemove() {
      return confirm('Are you sure you want to delete this file?')
    },
    editImage(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'edit image')
    },
    dataChange(data) {
      console.log(data, 'dataChange')
    },
  },
  mounted() {
    this.totalRows = this.items.length
  },
}
</script>
<style lang="scss">
.image-container {
  width: 600px !important;
  height: 250px !important;
  background: var(--light) !important;
  border-width: 2px !important;
  .preview-image {
    height: 200px !important;
  }
}

.paste-url {
  width: 600px;
  margin: 0 auto;
}

@media screen and (max-width: 576px) {
  .image-container {
    width: 300px !important;
  }

  .flex-column-xs {
    flex-direction: column;
  }

  .mt-xs-2 {
    margin-top: 5px;
  }

  .paste-url {
    width: 300px;
  }
}
</style>
