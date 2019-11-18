<template>
  <div class="navbar" :class="{fullWidth:getBurgerClicked}">
    <div class="logo">
      <h2>
        <a href="/">Weather App</a>
      </h2>
    </div>
    <div class="burger" @click="burgerclick()">
      <div class="burger-line-1" :class="{rotateDown:!burgerclicked}"></div>
      <div class="burger-line-1" :class="{rotateUp:!burgerclicked}"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      burgerclicked: false
    };
  },
  methods: {
    burgerclick() {
      this.burgerclicked = !this.burgerclicked;
      this.setBurgerClick(this.burgerclicked);
    },
    ...mapActions(["setBurgerClick"])
  },
  computed: {
    ...mapGetters(["getBurgerClicked"])
  }
};
</script>
<style lang="css" scoped>
.navbar {
  width: 75%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 40px 60px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
}
.logo {
  width: auto;
  margin-right: auto;
}
.logo h2 {
  padding: 5px;
}
.logo h2 a {
  text-decoration: none;
  color: white;
}
.burger {
  width: 50px;
  margin-left: auto;
  cursor: pointer;
  position: relative;
  height: 40px;
}
.burger-line-1 {
  width: 100%;
  height: 3px;
  background: rgb(255, 255, 255);
  margin-bottom: 10px;
  transition: 0.3s;
}
.rotateDown {
  transform: rotate(-45deg);
  position: absolute;
  top: 50%;
}
.rotateUp {
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
}
@media only screen and (max-width: 1150px) {
  .navbar {
    width: 100%;
    padding: 20px 30px;
    background:white;
  }
  .burger {
    width: 30px;
    height: 20px;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 25;
    margin-top: 5px;
  }
  .logo h2 a {
    color: #1a1a1a;
  }
  .burger-line-1 {
  background: #1a1a1a;
}
.rotateDown{
  top: 47%;
}
.rotateUp{
  top: 47%;
}
}
</style>