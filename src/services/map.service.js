import api from "@/http";

export default {
  async load() {
    return api.get("/api/v1/geo_data");
  },
  async create(payload) {
    return api.post("/api/v1/geo_data", payload);
  },
  async update(id, payload) {
    return api.put(`/api/v1/geo_datum/${id}`, payload);
  },
  async destroy(id, payload) {
    return api.delete(`/api/v1/geo_datum/${id}`, payload);
  },
  async destroy_all() {
    return api.delete("/api/v1/geo_data");
  }
};
