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
    addGeoDatum(context, geoDatum) {
      context.commit('addGeoDatum', geoDatum)
    }
  }
};
