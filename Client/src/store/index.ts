import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    discover_posts: [],
    display: "none",
    d_title: "a.shehab2",
    d_sub: `${new Date().getHours()}:${new Date().getMinutes()}`,
    d_text: ``,
    d_id: "",
  },
  mutations: {
    chd(state) {
      const i = 1;
      state.display = "unset";
    },
    reload() {
      return location.reload();
    },
  },
  actions: {
    async get_discover_posts({ state }) {
      await axios
        .get("http://localhost:3000/community")
        .then((response) => (state.discover_posts = response.data.reverse()));
    },
    async post_discover_posts({ state , commit }) {
      await axios
        .post("http://localhost:3000/community", {
          title: state.d_title,
          sub: state.d_sub,
          text: state.d_text,
        }).then(commit("reload"));
    },
    async del_post({ state, commit }, ide) {
      await axios
        .post(`http://localhost:3000/community/del/${ide}`)
        .then(commit("reload"));
    },
  },
  modules: {},
});
