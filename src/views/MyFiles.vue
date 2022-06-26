<template>
  <div class="my-files mt-5">
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      hover
      responsive
      :busy="loading"
      :items="items"
      :fields="fields"
    >
      <template #table-busy>
        <div class="text-center text-dark my-2">
          <b-spinner class="align-middle"></b-spinner>
        </div>
      </template>
      <template #head(action)> <span></span></template>
      <template #cell(orignal_name)="row">
        <b-icon icon="folder-fill" variant="warning" class="mr-2"></b-icon>
        <span> {{ row.item.orignal_name ? row.item.orignal_name :"" }} </span>
      </template>
      <template #cell(action)="row">
        <div class="d-flex justify-content-end align-items-center">
          <b-button variant="outline-primary" size="sm">
            <b-icon icon="back" @click="copyLink(row.item)"></b-icon>
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
                <span @click="copyLink(row.item)" class="ml-2">Copy Link</span>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-success text-white" >
                  <b-icon
                    icon="cloud-download-fill"
                  ></b-icon>
                </div>
                <span  class="ml-2" @click="videoDownload(row.item)">
                 <a href="#">Download</a> </span
                >
              </div>
            </b-dropdown-item>
        
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-danger text-white">
                  <b-icon icon="trash"></b-icon>
                </div>
                <span @click="deleteVideo(row.item)" class="ml-2">Delete</span>
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
</template>

<script>
/* eslint-disable */
import Vue from "vue";
export default {

  data() {
    return {
      loading: false,
      currentPage: 1,
      totalRows: 1,
      perPage: 5,
      pageOptions: [2, 5, 10, 15, { value: 100, text: "100" }],
      fields: [
        {
          key: "orignal_name",
          sortable: false,
        },
        {
          key: "item_id",
          sortable: false,
          tdClass: "sm-hidden",
          thClass: "sm-hidden",
        },
        {
          key: "created_at",
          sortable: false,
          tdClass: "sm-hidden",
          thClass: "sm-hidden",
        },
        "action",
      ],
      items: [],
      link: "",
    };
  },
  beforeMount() {
    this.getFiles();
    this.totalRows = this.items.length;
    setTimeout(function () {
      if (this.getUser != null)
        this.getUser.user_type == "admin"
          ? this.$router.push({ path: "yaiphare/dashboard" })
          : this.$router.replace("/");
    }, 2000);
  },
  mounted(){


  },
  methods: {
    videoDownload(dt) {
      if (dt.url == null) {
        this.link = process.env.VUE_APP_IMAGE_STORAGE_URL + dt.name;
      } else {
        this.link = dt.url;
      }
      window.open(this.link, "_blank").focus();
    },
    getFiles() {
      this.loading = true;
      const vm = this;
      this.$http
        .get(process.env.VUE_APP_API_URL + "/videos")
        .then((response) => {
          vm.items = response.data.data;
          vm.loading = false;
          vm.totalRows = response.data.total;
        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.loading = false;
            vm.$toast.error(errors.response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
        });
    },

 async copyLink(data) {
      try {
        const vm = this;
        let url = process.env.VUE_APP_URL +'player/'+ data.item_id;
        await  navigator.clipboard.writeText(url);
        vm.$toast.success("Link Copied", {
          position: "top-right",
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        // await this.$http
        //   .get(process.env.VUE_APP_API_URL + "/share-url/" + data.id, {
           
        //   })
        //   .then((response) => {
        //     navigator.clipboard.writeText(response.data.link);
        //     vm.$toast.success(response.data.message, {
        //       position: "top-right",
        //       closeButton: "button",
        //       icon: true,
        //       rtl: false,
        //     });
        //   })
        //   .catch((errors) => {
        //     if (errors.response.data) {
        //       vm.$toast.error(errors.response.data.message, {
        //         position: "top-right",
        //         closeButton: "button",
        //         icon: true,
        //         rtl: false,
        //       });
        //     }
        //   });
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    deleteVideo(video) {
      const vm = this;
      this.$http
      .delete(process.env.VUE_APP_API_URL + "/videos/" + video.id)
      .then(() => {
        Vue.$toast.success("File is Successfully Deleted");
        vm.getFiles();
      })
      .catch((errors) => {
        if (errors.response.data) {
          vm.$toast.error(errors.response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        }
      });
    },
   
  },

};
</script>
