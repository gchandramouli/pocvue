<template>
  <section class="section">
    <p v-if="loading" class="notification is-info">
      Loading
    </p>

    <template v-else>
      <h1 class="title">{{ user.name }}</h1>

      <article class="box">
        <div class="content">
          {{ user.username }}
        </div>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>Website: {{ user.website }}</p>
        <div class="content">
            <p>CompanyName: {{user.company.name}}</p>
        </div>
      </article>
    </template>
  </section>
</template>

<script>
import Api from "@/Api";

export default {
  data() {
    return {
      user: null,
      loading: true
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler($route) {
        Api.getUser($route.params.id)
          .then(response => {
            this.user = response.data;
            this.loading = false;
          })
          .catch(() => {
            alert("ERROR");
            this.loading = false;
          });
      }
    }
  }
};
</script>