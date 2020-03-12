<template>
  <div class="container">
    <h3>Users</h3>
    <table class="table is-striped is-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id"> 
          <th scope="row">{{user.id}}</th>          
          <td>
               <router-link :to="{name: 'user', params: {id: user.id}}">{{ user.name }}</router-link>
          </td>
          <td>{{user.email}}</td>
          <td>{{user.address.city}}</td>
        </tr>
      </tbody>
    </table> 
  </div>  
</template>

<script>
import Api from "@/Api";

export default {
  data() {
    return {
      loading: true,
      users: null
    };
  },

  created() {
    Api.getUsers()
      .then(response => {
        this.users = response.data;
        this.loading = false;
      })
      .catch(() => {
        alert("ERROR");
        this.loading = false;
      });
  }
};
</script>