<template>
  <div class="videos-page p-3">
    <b-table
      hover
      :items="items"
      :busy="loading"
      :fields="fields"
      class="bg-white"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template #table-busy>
        <div class="text-center text-dark my-2">
          <b-spinner class="align-middle"></b-spinner>
        </div>
      </template>
      <template #head(action)> <span></span></template>
      <template #cell(name)="row">
        <b-icon icon="folder-fill" variant="warning" class="mr-2"></b-icon>
        <span> {{ row.item.name }} </span>
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
                <div class="dropdown-icon bg-warning text-dark">
                  <b-icon icon="eye-fill"></b-icon>
                </div>
                <span class="ml-2">View User</span>
              </div>
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex">
                <div class="dropdown-icon bg-danger text-white">
                  <b-icon icon="trash"></b-icon>
                </div>
                <span @click="deleteVideo(row.item)" class="ml-2"
                  >Delete Video</span
                >
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
import { mapGetters } from "vuex";
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
          key: "name",
          sortable: true,
        },
        {
          key: "item_id",
          sortable: true,
          tdClass: "sm-hidden",
          thClass: "sm-hidden",
        },
        {
          key: "created_at",
          sortable: true,
          tdClass: "sm-hidden",
          thClass: "sm-hidden",
        },
        "action",
      ],
      items: [],
      link: "",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  beforeMount() {
    this.getFiles();
  },
  methods: {
    getFiles() {
      this.loading = true;
      const vm = this;
      this.$http
        .get(process.env.VUE_APP_API_URL + "/admin/all-videos", {
          headers: {
            Authorization: "Bearer " + this.getUser.token,
          },
        })
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
        // if(data.url ==null){
        //   this.link= process.env.VUE_APP_IMAGE_STORAGE_URL+data.name
        // }else{
        //   this.link =data.url
        // }

        const vm = this;
        await this.$http
          .get(process.env.VUE_APP_API_URL + "/share-url/" + data.id)
          .then((response) => {
            navigator.clipboard.writeText(response.data.link);
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
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
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    deleteVideo(video) {
      const vm = this;
      this.$http
        .delete(process.env.VUE_APP_API_URL + "/admin/videos/" + video.id, {
          headers: {
            Authorization: "Bearer " + this.getUser.token,
          },
        })
        .then((response) => {
          vm.getFiles();
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
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
