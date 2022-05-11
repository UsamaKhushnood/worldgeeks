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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
