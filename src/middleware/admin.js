import store from "../store";

export default function admin({ next, router }) {
  if (store.state.user != null && store.state.user.user_type == "admin") {
    return next();
  } else if (
    store.state.user != null &&
    store.state.user.user_type == "user"
  ) {
    return router.push({ name: "My Files" });
  }
  return next();
}
