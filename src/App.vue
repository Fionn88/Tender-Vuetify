<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 標案平台 </v-list-item-title>
          <v-list-item-subtitle> Best Choice！ </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-group :value="true" prepend-icon="mdi-view-dashboard">
          <template v-slot:activator>
            <v-list-item-title>標案</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>公開標案</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, to], index) in tenders"
              :key="index"
              link
              :to="to"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="true" prepend-icon="mdi-book-account">
          <template v-slot:activator>
            <v-list-item-title>憑證</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>憑證清單</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, to], index) in certificates"
              :key="index"
              link
              :to="to"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="true" prepend-icon="mdi-book-account">
          <template v-slot:activator>
            <v-list-item-title>設定</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>個人資料</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, to], index) in settings"
              :key="index"
              link
              :to="to"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="boat.jpeg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon
      @click="drawer =! drawer"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>標案平台</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view v-if="isRouterAlive"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data: () => ({
    drawer: null,
    tenders: [
      ["投標", "mdi-account-multiple-outline", "/"],
      ["招標", "mdi-chess-king", "/about"],
    ],
    certificates: [
      // ["創建", "mdi-plus-outline", "/"],
      ["現有憑證", "mdi-file-outline", "/CertificateSelect"],
      ["歷史憑證", "mdi-history", "/CertificateRevoke"],
    ],
    settings: [
      ["帳號", "mdi-account", "/"],
      ["銀行帳戶", "mdi-bank", "about"],
    ],
    items: [{ to: "/" }, { to: "/about" }],
    isRouterAlive: true
  }),
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function() {
         this.isRouterAlive = true
      })
    }
  }


};
</script>