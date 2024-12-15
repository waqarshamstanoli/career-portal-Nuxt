import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfileLayout from "../layouts/UserProfileLayout";
import Store from "@/store";
// import {createRouter, createWebHistory} from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardLayout,
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/submitProduct",
          name: "submitProduct",
          component: () => import("../views/SubmitProduct.vue"),
        },
        {
          path: "/pricing",
          name: "pricing",
          component: () => import("../views/PricingView.vue"),
        },
        {
          path: "/payment",
          name: "payment",
          component: () => import("../views/PaymentView.vue"),
        },
      ],
    },
    {
      path: "/user",
      name: "User",
      component: UserProfileLayout,
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/user/updateProfile",
          name: "updateProfile",
          component: () => import("../views/UpdateProfile.vue"),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: "/adminPanel",
      name: "admin",
      meta: {
        needsAuth: true,
      },
      component: () => import("../views/AdminPanel.vue"),
    },
  ],
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

router.beforeEach((to, from, next) => {
  let isAuthenticated = false;
  const admin = localStorage.getItem("roleAdmin");
  console.log("router", to);
  if (to.meta.needsAuth) {
    if (admin) {
      next();
    } else {
      next("/");
    }
  } 
  else {
    next();
  }
});

// const router = new VueRouter({
//   routes,
// });

export default router;
