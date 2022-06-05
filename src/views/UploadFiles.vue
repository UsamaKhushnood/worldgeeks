<template>
  <div class="upload-files">
    <div class="bg-light py-2">
      <p class="container mb-0 small">
        You are not allowed to upload copyrighted, pornographic, violent, or any
        other content that does not meet the requirement. We reserve the right
        to delete content that contains questions. <a href="#">DMCA</a>
        <a href="#" class="ml-1">Terms and Services</a>
      </p>
    </div>
    <div class="image-uploader d-flex justify-content-center my-5">
      <!-- <vue-upload-multiple-image
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
      ></vue-upload-multiple-image> -->
      <div class="uploader-wrapper">
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
          :useCustomSlot="true"
        >
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title text-primary">
              Drag and drop to upload content!
            </h3>
            <div class="subtitle">...or click to select a file</div>
          </div></vue-dropzone
        >
      </div>
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
  </div>
</template>
<script>
// import VueUploadMultipleImage from 'vue-upload-multiple-image'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 180,
        maxFilesize: 200000,
        addRemoveLinks: true,
        headers: { 'My-Awesome-Header': 'header value' },
      },
      imageList: [],
      uploadedImages: [],
    }
  },
  methods: {
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

.uploader-wrapper {
  width: 600px;
}

.dropzone-custom-content {
  width: 550px;
}

div#dropzone {
  border: 1px dashed #aeaeae !important;
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
}

.dropzone .dz-preview .dz-error-message {
  top: 0 !important;
}

a.dz-remove {
  left: 50% !important;
  transform: translate(-50%) !important;
  width: 80% !important;
  margin: 0 !important ;
}

@media screen and (max-width: 576px) {
  .dropzone-custom-content {
    width: 300px;
  }
  .uploader-wrapper {
    width: 100%;
    padding: 0 20px;
  }
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
