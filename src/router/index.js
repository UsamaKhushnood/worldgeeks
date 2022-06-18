import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
import admin from "../middleware/admin.js";
import user from "../middleware/user.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "My Files",
    meta: {
      layout: "userLayout",
      requiresAuth: true,
      middleware: user,
    },
    component: () => import("../views/MyFiles.vue"),
  },
  {
    path: "/signin",
    name: "Sign In",
    meta: {
      layout: "userLayout",
    },
    component: () => import("../views/authentication/SigninPage.vue"),
  },
  {
    path: "/forgot-password",
    name: "Reset Password",
    meta: {
      layout: "userLayout",
    },
    component: () => import("../views/authentication/ForgotPassword.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    meta: {
      layout: "userLayout",
    },
    component: () => import("../views/authentication/SingupPage.vue"),
  },
  {
    path: "/upload",
    name: "Upload Files",
    meta: {
      layout: "userLayout",
      requiresAuth: true,
      middleware: user,
    },
    component: () => import("../views/UploadFiles.vue"),
  },
  {
    path: "/terms-and-services",
    name: "Terms and Services",
    meta: {
      layout: "userLayout",
      requiresAuth: true,
      middleware: user,
    },
    component: () => import("../views/Terms&Services.vue"),
  },
  {
    path: "/dmca",
    name: "DMCA",
    meta: {
      layout: "userLayout",
      middleware: user,
    },
    component: () => import("../views/DMCA.vue"),
  },
  {
    path: "/profile",
    name: "User Profile",
    meta: {
      layout: "userLayout",
      middleware: user,
    },
    component: () => import("../views/UserProfile.vue"),
  },
  {
    path: "/statistics",
    name: "User Statistics",
    meta: {
      layout: "userLayout",
      middleware: user,
    },
    component: () => import("../views/Stats.vue"),
  },
  {
    path: "*",
    name: "Page Not Found",
    meta: { layout: "userLayout" },
    component: () => import("../components/admin/PageNotFound.vue"),
  },
  // admin links
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../layouts/TheContainer.vue"),
    redirect: "/admin/dashboard",
    meta: {
      middleware: admin,
      requiresAuth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          reload: true,
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/Dashboard.vue"),
      },
      {
        path: "videos",
        name: "Videos",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/Videos.vue"),
      },
      {
        path: "withdraws",
        name: "Withdraws Requests",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/Withdraw.vue"),
      },
      {
        path: "manage-user",
        name: "Manage User",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/ManageUsers.vue"),
      },
      {
        path: "add-user",
        name: "Add User",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/AddUser.vue"),
      },
      {
        path: "site-settings",
        name: "Site Settings",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/SiteSettings.vue"),
      },
      // {
      //   path: "upload",
      //   name: "Upload",
      //   meta: {
      //     layout: "adminLayout",
      //     requiresAuth: true,
      //     middleware: user
      //   },
      //   component: () => import("../views/admin/Uploads.vue"),
      // },
      {
        path: "earning-settings",
        name: "Earning Settings",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/EarningSettings.vue"),
      },
      {
        path: "ad-management",
        name: "Ad Management",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/AdManagement.vue"),
      },
      {
        path: "ad-mangement/:id",
        name: "Ad Management",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/EditAd.vue"),
      },
      // {
      //   path: "player",
      //   name: "Player",
      //   meta: {
      //     layout: "adminLayout",
      //     requiresAuth: true,
      //
      //   },
      //   component: () => import("../views/admin/Player.vue"),
      // },
      {
        path: "user-details/:id",
        name: "User Details",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/UserDetails.vue"),
      },
      {
        path: "profile",
        name: "Admin Profile",
        meta: {
          layout: "adminLayout",
          middleware: admin,
          requiresAuth: true,
        },
        component: () => import("../views/admin/Profile.vue"),
      },
      {
        path: "login",
        name: "Admin Login",
        meta: {
          layout: "universal",
        },
        component: () => import("../views/admin/SigninPage.vue"),
      },

      {
        path: "*",
        name: "Page Not Found",
        meta: {
          layout: "adminLayout",
          middleware: admin,
        },
        component: () => import("../components/admin/PageNotFound.vue"),
      },
    ],
  },
  {
    path: "/player",
    name: "Player",
    meta: {
      layout: "universal",
      middleware: admin,
      requiresAuth: true,
    },
    component: () => import("../views/Player.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: "active router-link-active",
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//   console.log(store.state.user)

//     // if (!store.state.user) {
//     //   next({
//     //     name: "Sign In",
//     //   });
//     // } else {
//       next();
//     // }
//   } else {
//     next();
//   }
// });

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
