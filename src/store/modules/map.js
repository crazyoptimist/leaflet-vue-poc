import mapService from "@/services/map.service";

export default {
  namespaced: true,

  state: {
    geoData: [
      {"type":"Feature","id":"USA-GA","properties":{"fips":"13","name":"Georgia"},"geometry":{"type":"Polygon","coordinates":[[[-83.109191,35.00118],[-83.322791,34.787579],[-83.339222,34.683517],[-83.005129,34.469916],[-82.901067,34.486347],[-82.747713,34.26727],[-82.714851,34.152254],[-82.55602,33.94413],[-82.325988,33.81816],[-82.194542,33.631944],[-81.926172,33.462159],[-81.937125,33.347144],[-81.761863,33.160928],[-81.493493,33.007573],[-81.42777,32.843265],[-81.416816,32.629664],[-81.279893,32.558464],[-81.121061,32.290094],[-81.115584,32.120309],[-80.885553,32.032678],[-81.132015,31.693108],[-81.175831,31.517845],[-81.279893,31.364491],[-81.290846,31.20566],[-81.400385,31.13446],[-81.444201,30.707258],[-81.718048,30.745597],[-81.948079,30.827751],[-82.041187,30.751074],[-82.002849,30.564858],[-82.046664,30.362211],[-82.167157,30.356734],[-82.216449,30.570335],[-83.498053,30.647012],[-84.867289,30.712735],[-85.004212,31.003013],[-85.113751,31.27686],[-85.042551,31.539753],[-85.141136,31.840985],[-85.053504,32.01077],[-85.058981,32.13674],[-84.889196,32.262709],[-85.004212,32.322956],[-84.960397,32.421541],[-85.069935,32.580372],[-85.184951,32.859696],[-85.431413,34.124869],[-85.606675,34.984749],[-84.319594,34.990226],[-83.618546,34.984749],[-83.109191,35.00118]]]}}
      ]
  },

  getters: {
    geoData(state) {
      // const geoData = state.geoData.map(geoDatum => {
      //   return {
      //     "type": geoDatum.type,
      //     "properties": {
      //       "name": geoDatum.properties.name,
      //       "amenity": geoDatum.properties.amenity,
      //       "popupContent": geoDatum.properties.popupContent,
      //     },
      //     "geometry": {
      //       "type": geoDatum.geometry.type,
      //       "coordinates": [geoDatum.geometry.coordinates.map(latLng => {
      //         return [latLng.lat, latLng.lng];
      //       })]
      //     }
      //   }
      // });
      // window.console.log(geoData)
      return state.geoData;
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
