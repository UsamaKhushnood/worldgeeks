<template>
  <div class="user-player p-3">
    <div class="video-player-wrapper">
      <div class="video-details">
        <div
          class="video-name d-flex justify-content-between align-items-center"
        >
          <h6>video title.mp4</h6>
          <div class="report text-secondary">
            <b-icon icon="exclamation-triangle" class="mr-1"></b-icon>
            <span>Report</span>
          </div>
        </div>
        <div class="video-player position-relative mt-2">
          <video controls style="width: 100%">
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
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
              <b-dropdown-item href="#">More Option</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="action-button">
          <div class="row">
            <div class="col-6">
              <b-button variant="warning" block>
                <b-icon icon="cloud-arrow-down"></b-icon>
                Download
              </b-button>
            </div>
            <div class="col-6">
              <b-button variant="warning" block>
                <b-icon icon="play"></b-icon>
                Play Video
              </b-button>
            </div>
          </div>
          <div class="my-2 small text-secondary">Option2</div>
          <div class="row">
            <div class="col-6">
              <b-button variant="primary" block>
                <b-icon icon="cloud-arrow-down"></b-icon>
                Download
              </b-button>
            </div>
            <div class="col-6">
              <b-button variant="primary" block>
                <b-icon icon="play"></b-icon>
                Play Video
              </b-button>
            </div>
          </div>
        </div>
        <div class="video-info mt-5">
          <p class="small mb-0">Video Information</p>
          <p class="small mb-0">Video Name 7 Apr 2022 368*549 37.4M</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.user-player {
  max-width: 768px;
  width: 100%;
  margin: 20px auto;
  .share-button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
