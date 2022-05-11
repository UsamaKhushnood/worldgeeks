import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "My Files",
    meta: { layout: "userLayout" },
    component: () => import("../views/MyFiles.vue"),
  },
  {
    path: "/signin",
    name: "Sign In",
    meta: { layout: "userLayout" },
    component: () => import("../views/authentication/SigninPage.vue"),
  },
  {
    path: "/forgot-password",
    name: "Reset Password",
    meta: { layout: "userLayout" },
    component: () => import("../views/authentication/ForgotPassword.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    meta: { layout: "userLayout" },
    component: () => import("../views/authentication/SingupPage.vue"),
  },
  {
    path: "/upload",
    name: "Upload Files",
    meta: { layout: "userLayout" },
    component: () => import("../views/UploadFiles.vue"),
  },
  // admin links
  {
    path: "/admin",
    name: "Admin",
    // meta: { layout: "userLayout" },
    component: () => import("../layouts/TheContainer.vue"),
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { layout: "adminLayout" },
        component: () => import("../views/admin/Dashboard.vue"),
      },
      {
        path: "videos",
        name: "Videos",
        meta: { layout: "adminLayout" },
        component: () => import("../views/admin/Videos.vue"),
      },
      {
        path: "*",
        name: "404",
        meta: { layout: "adminLayout" },
        component: () => import("../components/admin/PageNotFound.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
