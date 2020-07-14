<template>
  <l-map ref="map" :zoom="zoom" :center="center" :options="mapOptions">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-geo-json
      v-for="(geoDatum, key) in geoData"
      :key="key"
      :geojson="geoDatum"
    />
  </l-map>
</template>
<script>
import * as L from "leaflet";
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import LDraw from "leaflet-draw";

export default {
  name: "MainMap",
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },

  data() {
    return {
      zoom: 7,
      center: L.latLng(40, 270),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="/about">Crazy Optimist</a>',
      mapOptions: {
        zoomSnap: 0.5,
        maxZoom: 18,
        minZoom: 2
      }
    };
  },

  computed: {
    geoData() {
      return this.$store.state["map/geoData"];
    }
  },

  methods: {
    notUsed() {
      // Prevent Lint Error
      console.log(LDraw);
    }
  },

  mounted() {
    this.$nextTick(() => {
      const map = this.$refs.map.mapObject;
      const drawControl = new window.L.Control.Draw({
        position: "topright",
        draw: {
          polyline: false,
          polygon: {},
          rectangle: false,
          circle: false,
          marker: false
        }
      });

      map.addControl(drawControl);

      const editableLayers = new window.L.FeatureGroup().addTo(map);

      map.on(window.L.Draw.Event.CREATED, event => {
        const type = event.layerType;
        const layer = event.layer;

        // Data Handling Would Happen Here..
        let geoDatum = {
          type: "Feature",
          properties: {
            name: "A Cool Feature",
            amenity: "A Cool Label",
            popupContent: "This is a cool area.."
          },
          geometry: {
            type: type,
            coordinates: layer._latlngs[0]
          }
        };
        this.$store.dispatch("map/addGeoDatum", geoDatum);

        editableLayers.addLayer(layer);
      });
    });
  }
};
</script>

<style scoped>
.main-map {
  width: 100%;
  height: 100%;
}
</style>
