import store from "../store";

export default function admin({ next, router }) {
  if (store.state.user != null && store.state.user.user_type == "user") {
    return next();
  } else if (
    store.state.user != null &&
    store.state.user.user_type == "admin"
  ) {
    return router.push({ path: "/admin" });
  }
  return next();
}
