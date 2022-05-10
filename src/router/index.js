import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Sign In",
    component: () => import("../views/authentication/SigninPage.vue"),
  },
  {
    path: "/forgot-password",
    name: "Reset Password",
    component: () => import("../views/authentication/ForgotPassword.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/authentication/SingupPage.vue"),
  },
  {
    path: "/my-files",
    name: "My Files",
    component: () => import("../views/MyFiles.vue"),
  },
  {
    path: "/upload",
    name: "Upload Files",
    component: () => import("../views/UploadFiles.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
