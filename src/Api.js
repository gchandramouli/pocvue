import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export default {
  getPosts() {
    return axios.get("/posts");
  },

  getPost(id) {
    return axios.get("/posts/" + id);
  },

  getPhotos() {
    return axios.get("/photos");
  },

  getUsers(){
    return axios.get("/users");
  },

  getUser(id){
    return axios.get("/users/" + id);
  }

};
