import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "My Files",
    meta: { 
      layout: "userLayout",
      requiresAuth: true
    },
    component: () => import("../views/MyFiles.vue"),
  },
  {
    path: "/signin",
    name: "Sign In",
    meta: { 
      layout: "userLayout"
    },
    component: () => import("../views/authentication/SigninPage.vue"),
  },
  {
    path: "/forgot-password",
    name: "Reset Password",
    meta: { 
      layout: "userLayout"
    },
    component: () => import("../views/authentication/ForgotPassword.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    meta: { 
      layout: "userLayout"
    },
    component: () => import("../views/authentication/SingupPage.vue"),
  },
  {
    path: "/upload",
    name: "Upload Files",
    meta: { 
      layout: "userLayout",
      requiresAuth: true
    },
    component: () => import("../views/UploadFiles.vue"),
  },
  {
    path: "/terms-and-services",
    name: "Terms and Services",
    meta: { 
      layout: "userLayout",
      requiresAuth: true
    },
    component: () => import("../views/Terms&Services.vue"),
  },
  {
    path: "/dmca",
    name: "DMCA",
    meta: { layout: "userLayout" },
    component: () => import("../views/DMCA.vue"),
  },
  {
    path: "/profile",
    name: "User Profile",
    meta: { layout: "userLayout" },
    component: () => import("../views/UserProfile.vue"),
  },
  // admin links
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../layouts/TheContainer.vue"),
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/Dashboard.vue"),
      },
      {
        path: "videos",
        name: "Videos",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/Videos.vue"),
      },
      {
        path: "withdraws",
        name: "Withdraws Requests",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/Withdraw.vue"),
      },
      {
        path: "manage-user",
        name: "Manage User",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/ManageUsers.vue"),
      },
      {
        path: "add-user",
        name: "Add User",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/AddUser.vue"),
      },
      {
        path: "site-settings",
        name: "Site Settings",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/SiteSettings.vue"),
      },
      {
        path: "upload",
        name: "Upload",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/Uploads.vue"),
      },
      {
        path: "earning-settings",
        name: "Earning Settings",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/EarningSettings.vue"),
      },
      {
        path: "player",
        name: "Player",
        meta: { 
          layout: "adminLayout",
          requiresAuth: true
        },
        component: () => import("../views/admin/Player.vue"),

      },
      {
        path: "profile",
        name: "Admin Profile",
        meta: { layout: "adminLayout" },
        component: () => import("../views/admin/Profile.vue"),
      },
      {
        path: "*",
        name: "Page Not Found",
        meta: { layout: "adminLayout" },
        component: () => import("../components/admin/PageNotFound.vue"),
      },
    ],
  },
  {
    path: "/player",
    name: "player",
    component: () => import("../layouts/TheContainer.vue"),
    redirect: "/admin/dashboard",
    children: [],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to,from,next) =>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.state.user){
       next({
          name:"Sign In"
       });
    }else{
      next();
    }
  }else{
    next();
  }

});
export default router;
