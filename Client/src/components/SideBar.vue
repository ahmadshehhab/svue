/* eslint-disable prettier/prettier */
<template>
  <v-navigation-drawer app color="#1E2337" dark>
    <div class="text-center mt-5">
      <router-link to="/">
      <v-icon x-large>fab fa-soundcloud</v-icon>
      </router-link>
      <v-btn class="mt-3" text color="" outlined>Get Sound Cloud Pro</v-btn>
    </div>
    <h4 class="mt-6 ml-5 white--text">For You</h4>
    <v-list flat dense class="mt-5">
      <v-list-item-group v-model="selectItem" color="orange">
        <v-list-item tag="v-list-item" :to="item.route" v-for="(item, i) in items" :key="i" active-class="border">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <v-text v-text="item.text"></v-text>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider class="mx-5"></v-divider>
    <h4 class="mt-3 ml-5 white--text">Collection</h4>
    <v-list flat dense class="mt-1">
      <v-list-item-group class="fsize pa-0">
        <v-list-item
          v-for="(item, i) in collections"
          :key="i"
          active-class="border"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectItem: 0,
    drower: null,
    items: [
      { icon: "fas fa-satellite-dish", text: "Discover", route: "/discover" },
      { icon: "fas fa-stream", text: "Stream", route: "/stream" },
      { icon: "fas fa-user", text: "Community", route: "/community" },
      { icon: "fas fa-chart-pie", text: "Statistics", route: "/statistics" },
    ],
    collections: [
      { icon: "fas fa-heart", text: "Likes", route: "/likes" },
      { icon: "fas fa-music", text: "Playlist", route: "/playlists" },
      { icon: "fas fa-compact-disc", text: "Albums", route: "/albums" },
      { icon: "fas fa-podcast", text: "Podcast", route: "/podcasts" },
      { icon: "fas fa-users", text: "Following", route: "/followings" },
    ],
  }),
};
</script>

<style>
.border {
  border-right: 4px solid orange;
}
.fsize {
  font-size: 3px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 5px grey;
}
::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: 10px;
}
</style>
