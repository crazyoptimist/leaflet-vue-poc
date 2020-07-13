import mapService from "@/services/map.service"

export default {
  namespaced: true,
  state: {
    geoData: []
  },
  mutations: {
    addGeoDatum(state, geoDatum) {
      state.geoData.push(geoDatum);
    }
  },
  actions: {
    async addGeoDatum(context, geoDatum) {
      mapService.create(geoDatum).then(res => {
        if(res) {
          context.commit('addGeoDatum', geoDatum);
        }
      });
    }
  }
};
