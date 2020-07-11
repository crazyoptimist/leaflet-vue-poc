<template>
  <l-map
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    />     
  </l-map>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "MainMap",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 7,
      center: latLng(40, 270),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="/about">Crazy Optimist</a>',
      mapOptions: {
        zoomSnap: 0.5,
        maxZoom: 18,
        minZoom: 2
      },
    };
  },
  methods: {
  }
};
</script>

<style scoped>
  .main-map {
    width: 100%;
    height: 100%;
  }
</style>