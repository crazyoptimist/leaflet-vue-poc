import api from "@/http"

export default {

  async load(){
    return api.get("/api/v1/geojson")
  },
  async create(payload){
    return api.post("/", payload)
  },
  async update(id, payload){
    return api.put(`/api/v1/geojson/${id}`, payload)
  },
  async destroy(id, payload){
    return api.delete(`/api/v1/geojson/${id}`, payload)
  }

}
