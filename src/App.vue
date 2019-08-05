<template>
  <div id="shop-frontend">
    <Navbar />
    <div class="container" style="margin-top: 5em">
      <router-view />
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
