<template>
  <b-container>
    <b-card-group deck v-for="i in Math.ceil(certificates.length / 4)" :key="i">
      <b-card
        v-bind:key="certificate.id"
        v-for="certificate in certificates.slice((i - 1) * 4, (i - 1) * 4 + 4)"
        :title="certificate.tenderId"
        class="mb-2"
      >
        <b-card-text>
          {{ certificate.amount }}
        </b-card-text>

        <v-row align-v="center">
          <b-col sm>
            <b-button variant="primary" v-on:click="reveal = true"
              >View Certificate details</b-button
            >
          </b-col>

          <b-col sm>
            <b-button variant="primary"> Delete Certificate</b-button>
          </b-col>
        </v-row>
      </b-card>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
          v-for="certificate in certificates"
          v-bind:key="certificate.id"
        >
      
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">憑證資訊</p>

            <b-card-sub-title class="mb-2">txid: {{ certificate.txid }}</b-card-sub-title>

            <b-list-group flush>
              <b-list-group-item
                >標案號： {{ certificate.tenderId }}</b-list-group-item
              >
              <b-list-group-item
                >銀行帳戶代碼： {{ certificate.accountCode }}</b-list-group-item
              >
              <b-list-group-item
                >銀行帳戶： {{ certificate.account }}</b-list-group-item
              >
              <b-list-group-item>
                銀行戶名： {{ certificate.name }}</b-list-group-item
              >
              <b-list-group-item>
                銀行帳戶幣別： {{ certificate.currency }}</b-list-group-item
              >
              <b-list-group-item>
                銀行分行代號： {{ certificate.branch }}</b-list-group-item
              >
              <b-list-group-item>
                憑證金額： {{ certificate.amount }}</b-list-group-item
              >
              <b-list-group-item>
                憑證狀態： {{ certificate.status }}</b-list-group-item
              >
            </b-list-group>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </b-card-group>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      certificates: [],
      reveal: false,
    };
  },
  mounted() {
    axios
      .get("https://tender-backend.fishlab.com.tw/certificatequery", {})
      .then((resp) => {
        console.log(resp);
        this.certificates = resp.data.certificate;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>