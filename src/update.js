import Cookie from "js-cookie";
import store from './store'

export function update_from_cookies() {
  let logged_in = Cookie.get("logged_in");
  console.log("logged in? ", logged_in)
  if (logged_in) {
    store.commit("logged_in", true);
  } else {
    store.commit("logged_in", false);
  }
}