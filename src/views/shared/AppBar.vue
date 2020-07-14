<template>
  <div>
    <v-tabs dark>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-spacer></v-spacer>
      <v-btn @click="clearGeoData" class="mt-2" color="error"
        >Clear GeoJSON Data in Database</v-btn
      >
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    clearGeoData() {
      window.console.log("I'm going to purge db..");
    }
  }
};
</script>
