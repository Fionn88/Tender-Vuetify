<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> 確定 </v-card-title>
      <v-card-text
        >確定繳交押標金 {{ this.$route.query.amount }} 元嗎？
        {{ this.$route.query.amount }} 將會在您的帳戶凍結</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="$emit('close')"> No </v-btn>

        <!-- ------------------------------------------------------------- -->
        <!-- call API To Bank -->
        <v-btn color="green darken-1" text @click="insertCertificate"> Yes </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      certificates: this.$store.state.certificates
    };
  },
  methods: {
    async insertCertificate() {
      Object.keys(this.certificates)
        .filter((k, i) => i >= 100 && i < 300)
        .forEach((k) => console.log(this.certificates[k]));

      console.log("addCertificate");
      console.log("certificates: "+this.certificates);
      console.log(this.certificates);

      axios.post("http://127.0.0.1:3000/createCertificateMuti", {
          data: this.certificates,

        })
        .then(function (response) {
          console.log("resp: "+response)
          console.log(response)
          this.$emit("close");
          // let newState = {};
          // Object.keys(this.certificates).forEach(key => {
          //   newState[key] = null; // or = initialState[key]
          //   });
          //   this.$store.replaceState(newState);

        }).catch(err => {
          console.log("err")
          console.log(err);
        })

// 使用多重迴圈的方式，已棄用
      // for (
      //   let index = 0;
      //   index < Object.keys(this.certificates).length ;
      //   ++index
      // ) {
      //   const element = this.certificates[index];
      //   console.log("element: "+element);
      //   console.log(element);
      //   console.log(element);
        // console.log(element.tendersID)
      //   axios.post("http://127.0.0.1:3000/createCertificate", {
          // tenderid: element.tendersID,
          // accountCode: element.code,
          // account: element.account,     
          // name: element.name,
          // currency: element.accountCurrecy,
          // branch: element.branchName,
          // amount: element.amount,

      //   })
      //   .then(function (response) {
      //     console.log("resp: "+response)
      //     console.log(response)
      //   }).catch(err => {
      //     console.log("err")
      //     console.log(err);
      //   })
      // }

    }
  },
};
</script>

<style>
</style>