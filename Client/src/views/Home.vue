<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <v-app-bar color="rgba(0,0,0,0)" flat class="mt-4">
        <v-row>
          <v-col cols="12" sm="3">
            <v-btn color="orange" outlined dark>
              <v-icon left>fas fa-upload</v-icon>Upload
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Search ..."
              filled
              append-icon="mdi-magnify"
              dense
              solo
              flat
              background-color="#1E2337"
              dark
              v:model="choices"
            ></v-text-field>
           <!--  <v-list style="z-index:1000;position:absolute;top:40px;width:44%;">
              <v-list-item-group style="z-index:100">
                <v-list-item style="z-index:100"></v-list-item>
              </v-list-item-group>
            </v-list> -->
          </v-col>
          <v-col cols="12" sm="3">
            <div class="float-right mt-n1">
              <v-btn icon dark class="mr-n8"  height="max-content" width="max-content">
                <v-icon color="#878A94">fas fa-bell</v-icon>
              </v-btn>
              <v-btn icon dark class="ml-8 pa-0" height="max-content" width="max-content">
                <v-badge bordered overlap color="red" dot class="">
                  <v-icon color="#878A94">fas fa-envelope</v-icon>
                </v-badge>
              </v-btn>
              <v-btn text color="#878A94">Aperio</v-btn>
              <v-avatar size="30" class="ml-n1">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                ></v-img>
              </v-avatar>
              <v-btn icon dark class="ml-n3">
                <v-icon x-small color="#878A94">fas fa-chevron-down</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-div class="d-flex flex-column justify-space-between align-center" >
        <v-app-bar class="" color="#2F3346" flat style="z-index:10"  >
          <v-icon color="#878A94"  v-if="i>0"  @click="i--">fas fa-caret-left</v-icon>
          <span class="ml-3 mr-3 white--text">{{ messages[i] }}</span>
          <v-icon v-if="i<2" color="#878A94" @click="i++">fas fa-caret-right</v-icon>
        </v-app-bar>
      </v-div>

      <carousel-3d
        :autoplay="true"
        :autoplayHoverPause="true"
        :controls-visible="true"
        :clickable="false"
        :height="270"
      >
        <slide :index="i" :key="i" v-for="(slide, i) in slides">
          <input
            type="hidden"
            :index="i"
            :key="i"
            v-for="(slide, i) in slides"
            v-model="parent_id"
          />
          <figure>
            <img :src="slide.src" />
            <figcaption>
              <v-btn text color="white">{{ slide.text }}</v-btn>
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
      <v-div class="d-flex flex-column justify-space-between align-center">
        <v-app-bar class="" color="#2F3346" flat>
          <v-btn text class="white--text">
            <v-icon left dark color="#878A94">fas fa-caret-right</v-icon>
            2.54M Listeners
          </v-btn>
          <v-btn color="orange" dark>
            <v-icon left dark>fas fa-heart</v-icon>
            1.2M Likes
          </v-btn>
          <v-btn color="#1E2337" dark class="ml-2">
            <v-icon left dark>fas fa-retweet</v-icon>
            201k Reposts
          </v-btn>
          <v-btn color="#1E2337" dark class="ml-2">
            <v-icon left dark>fas fa-share-square</v-icon>
            Share
          </v-btn>
          <v-btn color="#1E2337" dark class="ml-2">
            <v-icon left dark>fas fa-ellipsis-h</v-icon>More
          </v-btn>
        </v-app-bar>
      </v-div>
      <v-div class="d-flex flex-column justify-space-between align-center">
        <v-row style="width: 100%">
          <v-col cols="12" sm="0"></v-col>
          <v-col
            cols="12"
            sm="12"
            style="
              bottom: 0;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              width: 100%;
              text-align: center;
            "
          >
            <v-card tile color="#1E2337" dark width="100%">
              <v-progress-linear
                :value="50"
                class="my-0"
                height="3"
              ></v-progress-linear>
              <v-row>
                <v-col cols="12" sm="2">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                    max-height="40"
                    max-width="40"
                    class="mt-4 ml-2"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="1">
                  <h6 class="mt-5 ml-n16 grey--text text--ligten-1">
                    La liberté<br />
                    <span class="grey--text text--darken-2">Soolking</span>
                  </h6>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-btn icon class="ml-n14 mt-4">
                    <v-icon>mdi-rewind</v-icon>
                  </v-btn>
                  <v-btn icon class="mt-4">
                    <v-icon color="orange">mdi-pause</v-icon>
                  </v-btn>
                  <v-btn icon class="mt-4">
                    <v-icon>mdi-fast-forward</v-icon>
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm="5"
                  class="d-flex align-center justify-space-around pa-0"
                >
                  <v-col cols="9" sm="9">
                    <v-app-bar flat color="#1E2337">
                      <span class="caption text-9xl ml-n14">01:44</span>
                      <v-slider
                        value="25"
                        color="orange"
                        class="mt-6"
                        cols="12"
                        sm="2"
                      ></v-slider>
                      <span class="caption text-9xl">04:30</span>
                    </v-app-bar>
                  </v-col>
                </v-col>
                <v-col cols="12" sm="1">
                  <v-btn icon class="mt-4">
                    <v-icon small>fas fa-random</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="1">
                  <v-btn icon class="mt-4">
                    <v-icon small>fas fa-undo</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
/* import HelloWorld from "../components/HelloWorld.vue"; */
import SideBar from "../components/SideBar.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default Vue.extend({
  name: "Home",
  data: () => ({
    slides: [
      { src: require("../assets/images/s.webp"), text: "Siilawy" },
      { src: require("../assets/images/ak.jpg"), text: "A5rass" },
      { src: require("../assets/images/big.jpg"), text: "Big Sam" },
    ],
    messages: ["Welcome To Sound Cloud", "Every Thing Is Here", "Enjoy..."],
    i: 0,
    choices:['d']
  }),
  components: {
    // HelloWorld, ِِ
    SideBar,
    Carousel3d,
    Slide,
  },
});
</script>
<style scoped>
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: orange;
}
</style>
