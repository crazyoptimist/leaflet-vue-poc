import mapService from "@/services/map.service";

export default {
  namespaced: true,
  state: {
    geoData: []
  },
  mutations: {
    addGeoDatum(state, geoDatum) {
      state.geoData.push(geoDatum);
    },
    loadGeoData(state, geoData) {
      state.geoData.push({ ...geoData });
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
