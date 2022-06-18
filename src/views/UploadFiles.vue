<template>
  <div class="upload-files content-container position-relative">
    <div class="bg-light py-2">
      <p class="container mb-0 small">
        You are not allowed to upload copyrighted, pornographic, violent, or any
        other content that does not meet the requirement. We reserve the right
        to delete content that contains questions. <a href="#">DMCA</a>
        <a href="#" class="ml-1">Terms and Services</a>
      </p>
    </div>
    <div class="image-uploader d-flex justify-content-center my-5">
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
          <span class="d-flex align-items-center" @click="uploadVideo">
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
    <div class="bottom-sheet border" :class="[expanded ? 'expanded' : '']">
      <div class="d-flex justify-content-between sheet-header">
        <h6 class="mb-0 p-2 bg-light">File Upload</h6>
        <b-button variant="link" size="sm" pill @click="expanded = !expanded">
          <b-icon icon="chevron-up"></b-icon>
        </b-button>
      </div>
      <div class="sheet-body my-3 px-2">
        <div
          class="uploading-file d-flex justify-content-between py-1"
          v-for="(data,index) in files"
          :key="index"
        >
          <h6 class="mb-0 small mr-3">
            <span class="text-primary">{{ data }}</span
            >
          </h6>
          <h6 class="mb-0 small text-success">Uploading</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  computed:{
    apiUrl(){
      return process.env.VUE_APP_API_URL
    }
  },
  beforeMount(){
    this.getUrl()
  },
  data() {
    return {
      expanded: true,
      text:'',
      files:[],
      dropzoneOptions: {
        url:'',
        thumbnailWidth: 180,
        acceptedFiles: '.mp4,.mkv,.avi',
        maxFilesize: 200000,
        addRemoveLinks: true,
        headers: { 'Authorization': 'Bearer '+this.$store.state.user.token },
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
    getUrl() {
       this.dropzoneOptions.url = this.apiUrl+'/videos' 
    },
    editImage(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'edit image')
    },
    dataChange(data) {
      console.log(data, 'dataChange')
    },
    arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    },
    uploadVideo() {
      let vm = this
      let link =this.text
      vm.files.push(link)
      vm.text=''
      vm.$http
        .post(process.env.VUE_APP_API_URL + '/videos',{
          url:link
        })
        .then(() => {
          Vue.$toast.success("File is Successfully Uploaded")
          vm.arrayRemove(vm.files, link);

        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.$toast.error(errors.response.data.message, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
          }
        })
    }
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

.bottom-sheet {
  width: 400px;
  position: absolute;
  bottom: 0;
  right: 5px;
  border-radius: 3px 3px 0 0;
  border-bottom: 0 !important;
  padding: 5px;
}

.bottom-sheet {
  height: 50px;
  overflow: hidden;
}

.bottom-sheet.expanded {
  height: auto;
  svg.bi-chevron-up.b-icon.bi {
    transform: rotate(180deg);
  }
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
