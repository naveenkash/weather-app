<template>
  <div>
    <h2 class="weather-head">Weather Details</h2>
    <div class="side-info-value">
      <p>
        <span class="side-key data-key">Cloudy</span>
        <span class="data-value">{{data.clouds.all}}%</span>
      </p>
    </div>
    <div class="side-info-value">
      <p>
        <span class="side-key data-key">Humidity</span>
        <span class="data-value">{{data.main.humidity}}%</span>
      </p>
    </div>
    <div class="side-info-value">
      <p>
        <span class="side-key data-key">Visibility</span>
        <span class="data-value">{{data.visibility/1000}} km</span>
      </p>
    </div>
    <div class="side-info-value">
      <p>
        <span class="side-key data-key">Wind</span>
        <span class="data-value">{{data.wind.speed}} m/s</span>
      </p>
    </div>
    <div class="side-info-value">
      <p>
        <span class="side-key data-key">In Farenheit</span>
        <span class="data-value">
          <input ref="convertTemp" type="checkbox" @change="convertToFar()" />
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["data"],
  methods: {
    convertToFar() {
      if (this.$refs.convertTemp.checked) {
        this.convertToFarenheit();
      } else {
        this.convertToCelsius();
      }
    },
    ...mapActions(["convertToFarenheit", "convertToCelsius"])
  }
};
</script>
<style lang="css" scoped>
.data-value input {
  padding: 15px;
  width: 18px;
  height: 18px;
}
</style>