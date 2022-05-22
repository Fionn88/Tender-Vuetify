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
            <b-button variant="primary" v-on:click="showDetail(certificate)"
              >View Certificate details</b-button
            >
          </b-col>

          <b-col sm>
            <b-button variant="outline-danger"> Delete Certificate</b-button>
          </b-col>
        </v-row>
      </b-card>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
      
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">憑證資訊</p>

            <b-card-sub-title class="mb-2">txid: {{ currentItem.txid }}</b-card-sub-title>

            <b-list-group flush>
              <b-list-group-item
                >標案號： {{ currentItem.tenderId }}</b-list-group-item
              >
              <b-list-group-item
                >銀行帳戶代碼： {{ currentItem.accountCode }}</b-list-group-item
              >
              <b-list-group-item
                >銀行帳戶： {{ currentItem.account }}</b-list-group-item
              >
              <b-list-group-item>
                銀行戶名： {{ currentItem.name }}</b-list-group-item
              >
              <b-list-group-item>
                銀行帳戶幣別： {{ currentItem.currency }}</b-list-group-item
              >
              <b-list-group-item>
                銀行分行代號： {{ currentItem.branch }}</b-list-group-item
              >
              <b-list-group-item>
                憑證金額： {{ currentItem.amount }}</b-list-group-item
              >
              <b-list-group-item>
                憑證狀態： {{ currentItem.status }}</b-list-group-item
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
      currentItem: {
        id:'',
        accountCode:'',
        account: '',
        name: '',
        currency: '',
        branch: '',
        amount: '',
        tenderId: '',
        status: '',
        txid: ''
        }
    };
    
  },
  methods: {
    showDetail(item){
      this.reveal = true
      console.log("shoeDetail()")
      this.currentItem = item
    }

  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/certificatequery", {})
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