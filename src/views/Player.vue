<template>
  <div style="background: #eaf0f8">
    <div class="user-player bg-white">
      <div
        class="d-flex p-2 align-items-center px-4 mb-3"
        style="background: #130f40"
      >
        <div class="mr-4">
          <router-link to="/" class="text-white mr-2">WorldGeeks</router-link>
          <b-icon icon="house" class="text-whtie"></b-icon>
        </div>
        <!-- <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
        ></b-form-input>
        <b-button variant="primary" size="sm" class="d-flex align-items-center">
          <b-icon icon="search" class="pr-1"></b-icon>
          <span class="pl-1">Search</span>
        </b-button> -->
      </div>
      <div style="background: #130f40" class="p-2 my-3">
        <!-- <h3 class="text-white text-center">Ad Space</h3> -->
        <div class="" v-html="ads[0].title"></div>        
      </div>
      <div class="video-player-wrapper px-3">
        <div class="video-details">
          <div
            class="video-name d-flex justify-content-between align-items-center"
          >
            <h6 v-if="loading == false">{{ video.orignal_name }}</h6>
            <div class="report text-secondary">
              <b-icon icon="exclamation-triangle" class="mr-1"></b-icon>
              <span>Report</span>
            </div>
          </div>

          <div class="video-player position-relative mt-2">
            <video
              ref="myVideo"
              id="myPlayer"
              controls
              style="width: 100%; max-height: 400px"
              v-if="loading == false"
              poster="placeholder.png"
            >
              <source
                v-if="video"
                :src="baseUrl + video.name"
                type="video/mp4"
              />
              <source
                v-if="video"
                :src="baseUrl + video.name"
                type="video/ogg"
              />
              Your browser does not support HTML video.
            </video>
            <div v-else>
              <div class="text-center text-dark my-2">
                <b-spinner class="align-middle"></b-spinner>
              </div>
            </div>

            <div class="share-button">
              <b-dropdown
                id="dropdown-right"
                right
                variant="warning"
                class="m-2"
                no-caret
                size="sm"
              >
                <template #button-content>
                  <span class="d-block">
                    <b-icon icon="share-fill"></b-icon>
                  </span>
                  <span class="sm"> Earn $ </span>
                </template>
                <b-dropdown-item href="#">Facebook</b-dropdown-item>
                <b-dropdown-item href="#">Instagram</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <!-- <b-dropdown-item href="#">More Option</b-dropdown-item> -->
              </b-dropdown>
            </div>
          </div>
          <div class="action-button">
            <div class="row">
              <div class="col-6">
                <b-button variant="warning" @click="videoDownload()" block>
                  <b-icon icon="cloud-arrow-down"></b-icon>
                  Download
                </b-button>
              </div>
              <div class="col-6">
                <b-button variant="warning" @click="playVideo()" block>
                  <b-icon icon="play"></b-icon>
                  Play Video
                </b-button>
              </div>
            </div>
          </div>
          <div class="video-info mt-5">
            <p class="small mb-0">Video Information</p>
            <p v-if="loading == false" class="small mb-0">
              Video Name {{ video.created_at }}
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <!-- <img src="https://via.placeholder.com/200" /> -->
        <div class="" v-html="ads[1].title"></div>
      </div>
      <div class="blog px-3">
        <h3 class="my-4">Daily Trending News</h3>
        <div class="single-post" v-for="(news,index) in news_data" :key="index" >
          <img :src="baseUrl+news.image" class="w-100" />
          <h4 class="blog-heading mt-1" v-html="news.title">
           
          </h4>
          <p class="text-secondary small mb-2">Jan 20, 2020, 11:48AM</p>
          <div class="blog-description" :class="{ truncated: activeItem[news.id] }">
            <p v-html="news.description">
            </p>
          
          </div>
          <div
            class="text-center read-more-btn"
            :class="{ truncated: activeItem[news.id]}"
          >
            <b-button
              :variant="activeItem[news.id] ?  'primary' :'danger' "
              pill
              @click="toggleActive(news)"
              >Read {{ activeItem[news.id] ? 'More' : 'Less' }}</b-button
            >
          </div>
        </div>

        <!-- <div class="single-post">
          <img src="https://via.placeholder.com/700x300" class="w-100" />
          <h4 class="blog-heading mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolo
          </h4>
          <p class="text-secondary small mb-2">Jan 20, 2020, 11:48AM</p>
          <div class="blog-description" :class="{ truncated: readMore }">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tenetur itaque odit quia expedita omnis aspernatur eum! Placeat
              accusantium itaque dignissimos dolore accusamus, et laborum cum
              earum architecto atque veniam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tenetur itaque odit quia expedita omnis aspernatur eum! Placeat
              accusantium itaque dignissimos dolore accusamus, et laborum cum
              earum architecto atque veniam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tenetur itaque odit quia expedita omnis aspernatur eum! Placeat
              accusantium itaque dignissimos dolore accusamus, et laborum cum
              earum architecto atque veniam!
            </p>
          </div>
          <div
            class="text-center read-more-btn"
            :class="{ truncated: readMore }"
          >
            <b-button
              :variant="readMore ? 'primary' : 'danger'"
              pill
              @click="readMore = !readMore"
              >Read {{ readMore ? 'More' : 'Less' }}</b-button
            >
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL
    },
  },
  mounted() {
    this.getVideo()
    setTimeout(() => {
      var player = document.getElementById('myPlayer')
      let vm = this
      player.addEventListener('play', function () {
        vm.playVideo()
      })
    }, 1000)
  },
  data() {
    return {
      loading: true,
      baseUrl: process.env.VUE_APP_IMAGE_STORAGE_URL,
      text: '',
      link: null,
      video: null,
      activeItem: {},
      ads: [],
      news_data: [],
    }
  },
  methods: {
  toggleActive(item) {
    if (this.activeItem[item.id]) {
      this.removeActiveItem(item);

      return;
    }

    this.addActiveItem(item);
  },
  addActiveItem(item) {
    this.activeItem = Object.assign({},
      this.activeItem,
      {[item.id]: item},
    );
  },
  removeActiveItem(item) {
    delete this.activeItem[item.id];
    this.activeItem = Object.assign({}, this.activeItem);
  },
    videoDownload() {
      this.link = process.env.VUE_APP_IMAGE_STORAGE_URL + this.video.name
      window.open(this.link, '_blank').focus()
    },
    arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value
      })
    },
    getVideo() {
      let vm = this
      let id = this.$route.params.id
      vm.$http
        .get(process.env.VUE_APP_API_URL + '/player/' + id)
        .then((response) => {
          vm.video = response.data.data
          vm.news_data = response.data.news
          vm.ads = response.data.ads
          vm.loading = false
        })
        .catch((errors) => {
          if (errors.response.data) {
            vm.loading = false
             console.log(errors.response.data.message)
          }
        })
    },
    playVideo() {
      let vm = this
      this.$refs.myVideo.play()
      vm.$http
        .get(process.env.VUE_APP_API_URL + '/statistics/' + this.video.id)
        .then(() => {})
        .catch((errors) => {
          if (errors.response.data) {
            console.log(errors.response.data.message)
          }
        })
    },
  },
}
</script>

<style lang="scss">
.user-player {
  max-width: 768px;
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  .share-button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.blog-description {
  &.truncated {
    max-height: 70px;
    overflow: hidden;
  }
}

.read-more-btn {
  margin-top: 0;
  padding: 10px;
  &.truncated {
    background: linear-gradient(hsla(0, 0%, 100%, 0.8) 0.12%, #ffffffe3);
    margin-top: -40px;
    backdrop-filter: blur(0.1px);
  }
}
</style>
