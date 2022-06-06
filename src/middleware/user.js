import store from "../store";

export default function admin({ next, router }) {

  if (store.state.user ){
  if (store.state.user  && store.state.user.user_type == "user") {
    // return router.push({ name: "My Files" });
    return next();
  } else if (
    store.state.user &&
    store.state.user.user_type == "admin"
  ) {
    return router.push({ path: "/admin" });
  }
 }
 return router.push({ path: "/signin" });

}
