<template>
  <div style="background: #eaf0f8" class="position-relative">
    <b-overlay :show="bottomSheet" variant="dark" spinner-type="none">
      <div class="user-player bg-white">
        <!-- <div
        class="d-flex p-2 align-items-center px-4 mb-3"
        style="background: #130f40"
      >
        <div class="mr-4">
          <router-link to="/" class="text-white mr-2">WorldGeeks</router-link>
          <b-icon icon="house" class="text-whtie"></b-icon>
        </div>
      </div> -->
        <div class="bg-primary d-flex p-2 align-items-center px-4 mb-3">
          <div class="mr-4 d-flex align-items-center">
            <b-icon icon="house" variant="light" class="mr-2"></b-icon>
            <h6 class="mb-0 text-light">WorldGeeks</h6>
          </div>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>

          <b-button
            variant="success"
            size="sm"
            class="d-flex align-items-center ml-2 py-1"
          >
            <b-icon icon="search" scale="0.9"></b-icon>
            <span class="pl-1">Search</span>
          </b-button>
          <b-button
            variant="warning"
            size="sm"
            class="d-flex align-items-center ml-2 py-1"
          >
            <b-icon icon="gift"></b-icon>
          </b-button>
        </div>
        <div style="background: #130f40" class="p-2 my-3">
          <!-- <h3 class="text-white text-center">Ad Space</h3> -->
          <div
            class=""
            v-html="ads[0].title"
            style="width: 100% !important; overflow: hidden"
          ></div>
        </div>
        <div class="video-player-wrapper px-3">
          <div class="video-details">
            <div
              class="video-name d-flex justify-content-between align-items-center"
            >
              <h6 v-if="loading == false">{{ video.orignal_name }}</h6>
              <div
                class="report text-dark btn-warning btn btn-sm"
                @click="bottomSheet = true"
              >
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
                controlsList="nodownload"
              >
                <!-- controls -->
                <source v-if="video" :src="videoSrc" type="video/mp4" />
                <!-- <source v-if="video" :src="videoSrc" type="video/ogg" /> -->
                Your browser does not support HTML video.
              </video>
              <!-- <div>
              <div class="text-center text-dark my-2">
                <b-spinner class="align-middle"></b-spinner>
              </div>
            </div> -->

              <!-- <div class="share-button">
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
                <b-dropdown-item href="#">More Option</b-dropdown-item>
              </b-dropdown>
            </div> -->
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
                Video Name:{{ video.orignal_name }}
              </p>
              <p v-if="loading == false" class="small mb-0">
                Video Size: {{ video.size }} Mb
              </p>
              <p v-if="loading == false" class="small mb-0">
                Video Uploader Name: {{ video.user.first_name }}
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
          <div
            class="single-post"
            v-for="(news, index) in news_data"
            :key="index"
          >
            <img :src="baseUrlImage + news.image" class="w-100" />
            <h4 class="blog-heading mt-1" v-html="news.title"></h4>
            <p class="text-secondary small mb-2">Jan 20, 2020, 11:48AM</p>
            <div
              class="blog-description"
              :class="{ truncated: activeItem[news.id] }"
            >
              <p v-html="news.description"></p>
            </div>
            <div
              class="text-center read-more-btn"
              :class="{ truncated: activeItem[news.id] }"
            >
              <b-button
                :variant="activeItem[news.id] ? 'primary' : 'danger'"
                pill
                @click="toggleActive(news)"
                >Read {{ activeItem[news.id] ? 'More' : 'Less' }}</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </b-overlay>
    <div
      class="report-bottom-sheet p-3"
      :class="{ showbottomSheet: bottomSheet }"
    >
      <div class="bs-header d-flex justify-content-between align-items-center">
        <h6 class="mb-0">Report video</h6>
        <b-icon icon="x" scale="1.5" @click="bottomSheet = false"></b-icon>
      </div>
      <div class="bs-body">
        <b-form-group class="mt-2">
          <b-form-radio
            v-for="(option, index) in options"
            :key="index"
            v-model="selected"
            name="report-radios"
            class="mb-1"
            :value="option"
            @change="sendReport()"
            >{{ option }}</b-form-radio
          >
        </b-form-group>
      </div>
    </div>
    <ad-script />
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
import AdScript from './adScript.vue'
export default {
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL
    },
  },
  components: {
    AdScript,
  },
  mounted() {
    this.getVideo()
    let vm = this
    setTimeout(() => {
      var player = document.getElementById('myPlayer')
      player.addEventListener('play', function () {
        vm.playVideo()
      })
    }, 1000)(
      // let externalScript = document.createElement('script')
      // externalScript.setAttribute('src', 'https://stootsou.net/pfe/current/tag.min.js?z=5190981')
      // externalScript.setAttribute('async',true)
      // externalScript.setAttribute('data-cfasync', 'false')
      // document.head.appendChild(externalScript)

      // let itweepinbelltor = document.createElement('script')
      // itweepinbelltor.setAttribute('data-cfasync', 'false')
      // itweepinbelltor.setAttribute('src', 'https://itweepinbelltor.com/pfe/current/tag.min.js?z=5190981')
      // document.head.appendChild(itweepinbelltor)

      // let vaugroar = document.createElement('script')
      // vaugroar.setAttribute('data-cfasync', 'false')
      // vaugroar.setAttribute('src', 'https://vaugroar.com/pfe/current/tag.min.js?z=5190981')
      // document.head.appendChild(vaugroar)

      // let tobaltoyon = document.createElement('script')
      // tobaltoyon.setAttribute('data-cfasync', 'false')
      // tobaltoyon.setAttribute('src', 'https://tobaltoyon.com/pfe/current/tag.min.js?z=5191080')
      // document.head.appendChild(tobaltoyon)

      // let upgulpinon = document.createElement('script')
      // upgulpinon.setAttribute('data-cfasync', 'false')
      // upgulpinon.setAttribute('src', '//upgulpinon.com/1?z=5191279')
      // document.head.appendChild(upgulpinon)

      function (s, u, z, p) {
        ;(s.src = u), s.setAttribute('data-zone', z), p.appendChild(s)
      }
    )(
      document.createElement('script'),
      'https://inklinkor.com/tag.min.js',
      5191284,
      document.body || document.documentElement
    )
  },
  data() {
    return {
      selected: null,
      options: [
        'Spam',
        'Violence',
        'Pornography',
        'Child Abuse',
        'Copyright',
        'Other',
      ],
      loading: true,
      bottomSheet: false,
      baseUrl: process.env.VUE_APP_IMAGE_STORAGE_URL,
      baseUrlImage: process.env.VUE_APP_IMAGE_URL,
      text: '',
      link: null,
      video: null,
      videoSrc: null,
      activeItem: {},
      ads: [],
      news_data: [],
    }
  },
  methods: {
    toggleActive(item) {
      if (this.activeItem[item.id]) {
        this.removeActiveItem(item)

        return
      }

      this.addActiveItem(item)
    },
    addActiveItem(item) {
      this.activeItem = Object.assign({}, this.activeItem, { [item.id]: item })
    },
    removeActiveItem(item) {
      delete this.activeItem[item.id]
      this.activeItem = Object.assign({}, this.activeItem)
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
          $('head').append(response.data.script[0])
          $('head').append(response.data.script[1])
          $('head').append(response.data.script[2])
          $('head').append(response.data.script[3])
          // $("head").append(response.data.script[4])
          // $("head").append(response.data.script[5])
          setTimeout(function () {
            vm.loading = false
            vm.videoSrc = vm.baseUrl + vm.video.name
          }, 5000)
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
    sendReport() {
      let vm = this
      this.bottomSheet = false
      vm.$http
        .post(process.env.VUE_APP_API_URL + '/report', {
          video_id: this.video.id,
          status: this.selected,
        })
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
        })
        .catch((errors) => {
          if (errors.response.data) {
            console.log(errors.response.data.message)
          }
        })
    },
  },
  watch: {
    // selected(newVal, oldVal) {
    //   this.sendReport(newVal)
    //   console.log(oldVal)
    //   this.selected = null
    //   this.bottomSheet = false
    // },
  },
}
</script>

<style lang="scss" scoped>
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

.report-bottom-sheet {
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
  height: 220px;
  display: none;
  z-index: 9999;
}

.showbottomSheet {
  display: block;
}

video#myPlayer {
  background: linear-gradient(180deg, #002c4e, #00010c);
}

// video::-internal-media-controls-download-button {
//     display:none;
// }

// video::-webkit-media-controls-enclosure {
//     overflow:hidden;
// }

// video::-webkit-media-controls-panel {
//     width: calc(100% + 30px); /* Adjust as needed */
// }
</style>
