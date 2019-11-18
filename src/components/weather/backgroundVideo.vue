<template>
  <div class="video-overlay">
    <video
      v-if="atmosId===701 || atmosId>701 || atmosId<781 || atmosId===781"
      id="background-video"
      :src="this.videoSource"
      loop
      autoplay
      muted
    ></video>
  </div>
</template>
<script>
export default {
  props: {
    atmosId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      videoSource: ""
    };
  },
  created() {
    if (
      this.atmosId === 801 ||
      this.atmosId > 801 
    ) {
      this.videoSource = "/assets/videos/clouds.mp4";
    } else if (this.atmosId === 800) {
      this.videoSource = "/assets/videos/clear_sky.mp4";
    } else if (
      this.atmosId === 701 ||
      this.atmosId > 701 
    ) {
      this.videoSource = "/assets/videos/haze.mp4";
    } else if (
      this.atmosId === 600 ||
      this.atmosId > 600 
    ) {
      this.videoSource = "/assets/videos/snow.mp4";
    } else if (
      this.atmosId === 500 ||
      this.atmosId > 500 
    ) {
      this.videoSource = "/assets/videos/rain.mp4";
    } else if (
      this.atmosId === 300 ||
      this.atmosId > 300 
    ) {
      this.videoSource = "/assets/videos/rain.mp4";
    } else if (
      this.atmosId === 200 ||
      this.atmosId > 200
    ) {
      this.videoSource = "/assets/videos/thunderstorm.mp4";
    } else {
      this.videoSource = "/assets/videos/haze.mp4";
    }
  }
};
</script>
<style lang="css" scoped>
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.281);
  width: 100%;
  height: 100%;
}
#background-video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>