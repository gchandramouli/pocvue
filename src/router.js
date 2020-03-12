import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/vuejs_poc/"
    : "/";

export default new Router({
  mode: "history",
  base,

  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/Home.vue").default // load sync home
    },
    {
      path: "/photos",
      name: "photos",
      component: () => import("@/pages/Photos.vue")
    },
    {
      path: "/about-us",
      name: "about",
      meta: { layout: "no-sidebar" },
      component: () => import("@/pages/About.vue")
    },
    {
      path: "/story/:id",
      name: "post",
      component: () => import("@/pages/Post.vue")
    },
    {
      path: "/users",
      name: "users",
      meta: {layout: "no-sidebar"},
      component: () => import("@/pages/Users.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      meta: {layout: "no-sidebar"},
      component: () => import("@/pages/User.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
});
