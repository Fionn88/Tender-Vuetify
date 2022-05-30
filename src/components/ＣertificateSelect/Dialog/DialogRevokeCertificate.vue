<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> 確定 </v-card-title>
      <v-card-text
        >確定解除憑證嗎？
        {{ this.currentItem.amount }} 將會在您的帳戶解凍</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="$emit('close')"> No </v-btn>

        <v-btn color="green darken-1" text @click="revokeCertificate">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "refresh",
  inject: ["reload"],
  props: ["currentItem"],
  methods: {
    revokeCertificate() {
      var self = this;
      axios
        .post("http://127.0.0.1:3000/revokeCertificate", {
          txid: this.currentItem.txid,
        })
        .then(function (response) {
          console.log("resp: " + response);
          console.log(response);
          self.$emit("close");

          self.reload();
        })
        .catch((err) => {
          console.log("err");
          console.log(err);
        });
    },
    refresh() {
      this.reload();
    },
  },
};
</script>

<style>
</style>