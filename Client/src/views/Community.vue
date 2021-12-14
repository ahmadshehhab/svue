<template>
  <v-app>
    <side-bar />
    <v-container-fluid>
      <v-app-bar dense dark>
        <v-row>
          <v-div class="d-flex align-center" style="width: 100%">
            <v-col cols="10" sm="11" md="11" lg="9">
              <v-text>Discover Page</v-text>
            </v-col>
            <v-col
              cols="9"
              sm="9"
              md="2"
              lg="2"
              class="d-none d-lg-flex align-center justify-space-arounds ml-3"
            >
              <v-avatar class="ml-9 pl-0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                  max-height="30"
                  max-width="30"
                  style="border-radius: 50%"
                  class="pl-0"
                ></v-img>
              </v-avatar>
              <v-btn text>Apireo</v-btn>
            </v-col>
            <v-col cols="1" sm="1" md="1" lg="1" class="mr-3">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn icon dark small v-on="on">
                    <v-icon>fas fa-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list dark dense>
                  <v-list-item
                    class="list"
                    :key="i"
                    v-for="(item, i) in chevronList"
                  >
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                  <v-list-item class="list d-lg-none">
                    <v-list-item-title>Account</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-div>
        </v-row>
      </v-app-bar>

      <v-app>
        <v-container>
          <v-row>
            <v-col cols="3" sm="3" md="2" lg="1" class="mr-4">
              <v-btn small class="green" @click="$store.commit('chd')"
                >New Post</v-btn
              >
            </v-col>
            <v-col cols="3" sm="3" md="2" lg="1">
              <v-btn small color="#787A94" class="1">New photo </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-col cols="12">
          <v-div class="d-flex-column align-center">
            <v-card
              class="mb-5"
              :style="{ display: this.$store.state.display }"
            >
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="12" class="d-flex">
                    <v-card-title class="pr-1">a.shehab2</v-card-title>
                    <card-subtitle
                      style="color: gray; font-size: 13px"
                      class="ml-0 pa-0 mt-6"
                      >20:08</card-subtitle
                    >
                  </v-col>
                </v-row>
                <v-card-text>
                  <v-text-field v-model="$store.state.d_text"></v-text-field
                ></v-card-text>
                <v-card-action>
                  <v-icon @click="$store.dispatch('post_discover_posts')"
                    >fas fa-upload</v-icon
                  >
                </v-card-action>
              </v-container>
            </v-card>
            <v-card
              v-for="post in this.$store.state.discover_posts"
              :key="post._id"
              class="mb-5"
            >
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="12" class="d-flex">
                    <v-card-title
                      class="pr-1"
                      v-text="post.title"
                    ></v-card-title>
                    <card-subtitle
                      style="color: gray; font-size: 13px"
                      class="ml-0 pa-0 mt-6"
                      v-text="post.sub"
                    ></card-subtitle>
                  </v-col>
                </v-row>
                <v-card-text v-text="post.text"></v-card-text>
                <v-card-action>
                  <v-icon @click="$store.dispatch(`del_post`,post._id)">fas fa-upload</v-icon>
                </v-card-action>
              </v-container>
            </v-card>
          </v-div>
        </v-col>
      </v-app>
    </v-container-fluid>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "Community",
  mounted() {
    this.$store.dispatch("get_discover_posts");
  
  },
  data() {
    return {
      posts: null,
      chevronList: ["Settings", "Log Out"],
      name: "",
    };
  },
  components: {
    SideBar,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.list:hover {
  background-color: rgb(255, 166, 0);
}
.black {
  background-color: aqua;
}
</style>
