<template>
  <div id="app">
    <Main v-if="position.coords"></Main>
    <LocationError v-if="!setLocationAllowed" />
    <Loading v-if="loading" />
  </div>
</template>

<script>
import Main from "./components/main.vue";
import LocationError from "./components/locationErrorHandler/locationError";
import Loading from "./components/loadingHandler/loading";
import { mapActions } from "vuex";
export default {
  name: "app",
  components: {
    Main,
    LocationError,
    Loading
  },
  data() {
    return {
      position: {},
      setLocationAllowed: true,
      loading: true
    };
  },
  methods: {
    Getlocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.displayLocationInfo,
          this.handleLocationError
        );
      } else {
        alert("navigation isn't supported");
      }
    },
    displayLocationInfo(position) {
      this.loading = false;
      this.setLocationAllowed = true;
      this.setCoords(position);
      this.position = position;
    },

    handleLocationError(error) {
      switch (error.code) {
        case 1:
          this.setLocationAllowed = false;
          this.loading = false;
          break;
        default:
          alert("some error occured");
      }
    },
    ...mapActions(["setCoords"])
  },
  created() {
    this.Getlocation();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 0;
  padding: 0;
}
.widthAdjust {
  width: 75% !important;
}

.container {
  width: 1150px;
  margin: 0 auto;
}
@media only screen and (max-width: 1150px) {
  .widthAdjust {
    width: 100% !important;
  }
  .container {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
