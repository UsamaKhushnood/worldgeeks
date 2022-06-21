import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
import yaiphare from "../middleware/admin.js";
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
    component: () => import("../components/yaiphare/PageNotFound.vue"),
  },
  // admin links
  {
    path: "/yaiphare",
    name: "Yaiphare",
    component: () => import("../layouts/TheContainer.vue"),
    redirect: "/yaiphare/dashboard",
    meta: {
      middleware: yaiphare,
      requiresAuth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          reload: true,
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/Dashboard.vue"),
      },
      {
        path: "videos",
        name: "Videos",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/Videos.vue"),
      },
      {
        path: "withdraws",
        name: "Withdraws Requests",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/Withdraw.vue"),
      },
      {
        path: "set-cpm",
        name: "Cpm",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/SetCpm.vue"),
      },
      {
        path: "manage-user",
        name: "Manage User",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/ManageUsers.vue"),
      },
      {
        path: "add-user",
        name: "Add User",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/AddUser.vue"),
      },
      {
        path: "site-settings",
        name: "Site Settings",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/SiteSettings.vue"),
      },
      {
        path: "earning-settings",
        name: "Earning Settings",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/EarningSettings.vue"),
      },
      {
        path: "ad-management",
        name: "Ad Management",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/AdManagement.vue"),
      },
      {
        path: "ad-mangement/:id",
        name: "Ad Management",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/EditAd.vue"),
      },
      {
        path: "user-details/:id",
        name: "User Details",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/UserDetails.vue"),
      },
      {
        path: "profile",
        name: "Admin Profile",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
          requiresAuth: true,
        },
        component: () => import("../views/yaiphare/Profile.vue"),
      },
      {
        path: "login",
        name: "Admin Login",
        meta: {
          layout: "universal",
        },
        component: () => import("../views/yaiphare/SigninPage.vue"),
      },

      {
        path: "*",
        name: "Page Not Found",
        meta: {
          layout: "yaiphareLayout",
          middleware: yaiphare,
        },
        component: () => import("../components/yaiphare/PageNotFound.vue"),
      },
    ],
  },
  {
    path: "/player/:id",
    name: "Player",
    meta: {
      layout: "universal",
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
