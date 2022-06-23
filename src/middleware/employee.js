import store from "../store";

export default function admin({ next, router }) {
  if (store.state.user && store.state.user.user_type == "employee") {
    return next();
  } 

return router.push({ path: "/signin" });

}
