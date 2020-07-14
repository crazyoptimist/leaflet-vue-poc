import mapService from "@/services/map.service";

export default {
  namespaced: true,

  state: {
    geoData: []
  },

  getters: {
    geoData(state) {
      const geoData = state.geoData.map(geoDatum => {
        return {
          "type": geoDatum.type,
          "properties": {
            "name": geoDatum.properties.name,
            "amenity": geoDatum.properties.amenity,
            "popupContent": geoDatum.properties.popupContent,
          },
          "geometry": {
            "type": geoDatum.geometry.type,
            "coordinates": [geoDatum.geometry.coordinates.map(latLng => {
              return [latLng.lat, latLng.lng];
            })]
          }
        }
      });
      window.console.log(geoData)
      return geoData;
    }
  },

  mutations: {
    addGeoDatum(state, geoDatum) {
      state.geoData.push(geoDatum);
    },
    loadGeoData(state, geoData) {
      state.geoData = state.geoData.concat(geoData);
    }
  },

  actions: {
    async addGeoDatum(context, geoDatum) {
      mapService.create(geoDatum).then(res => {
        if (res) {
          context.commit("addGeoDatum", geoDatum);
        }
      });
    },

    async loadGeoData(context) {
      mapService.load().then(res => {
        if (res) {
          context.commit("loadGeoData", res.data);
        }
      });
    }
  }

};
