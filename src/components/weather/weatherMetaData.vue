<template>
  <div class="weather-metadata">
    <div class="weather-metadata-wrapper">
      <div class="metadata-date">
        <p>
          <span>{{ this.getTime(data.dt) }}</span>
        </p>
      </div>
      <div class="metadata-location">
        <span>{{ data.name }}, {{ data.sys.country }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["data"],
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  },
  methods: {
    getTime(timestamp) {
      var date = new Date(timestamp * 1000);
      var hour = date.getHours();
      var minute = date.getMinutes();
      var day = date.getDay();
      var numberDate = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var dayOrNight = false;

      if (hour > 12) {
        hour = hour - 12;
        dayOrNight = true;
      } else if (hour === 12) {
        dayOrNight = true;
      } else if (hour === 0) {
        hour = 12;
        dayOrNight = false;
      } else {
        dayOrNight = false;
      }
      if (minute < 10) {
        minute = `0${minute}`;
      }
      var AMPM = dayOrNight ? "PM" : "AM";
      return `${hour}:${minute} ${AMPM} - ${this.getday(day)}, ${numberDate} ${
        this.months[month]
      } ${year}`;
    },
    getday(day) {
      return this.days[day];
    }
  }
};
</script>
<style lang="css" scoped>
.weather-metadata {
  width: 100%;
  height: auto;
  padding: 60px;
}
.weather-metadata-wrapper {
  display: flex;
  height: auto;
  width: 100%;
  height: auto;
  color: white;
}
.metadata-date {
  margin-right: auto;
}
.metadata-date p span {
  font-family: "Poppins", sans-serif;
}
.metadata-location {
  margin-left: auto;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 901px) {
  .weather-metadata {
    padding: 40px;
  }
}
@media only screen and (max-width: 567px) {
  .weather-metadata-wrapper {
    flex-direction: column;
  }
  .metadata-date {
    margin-bottom: 15px;
  }
  .metadata-location {
    margin-left: unset;
  }
  .weather-metadata {
    padding: 30px;
  }
}
@media only screen and (max-width: 500px) {
  .weather-metadata {
    padding: 20px 30px;
  }
}
</style>
