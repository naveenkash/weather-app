<template>
  <div id="app">
    <Main v-if="position.coords"></Main>
  </div>
</template>

<script>
import Main from "./components/main.vue";
import { mapActions } from "vuex";
export default {
  name: "app",
  components: {
    Main
  },
  data() {
    return {
      position: {}
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
      this.setCoords(position);
      this.position = position;
    },

    handleLocationError(error) {
      switch (error.code) {
        case 1:
          alert("please allow location to get the weather info");
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
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Josefin Sans", sans-serif;
  /* font-family: 'Poppins', sans-serif; */
  margin: 0;
  padding: 0;
}
.fullWidth{
    width: 100% !important;
}
</style>
