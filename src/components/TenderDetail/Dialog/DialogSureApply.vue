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
        <v-btn color="green darken-1" text @click="addCertificate"> Yes </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      certificate: [],
    };
  },
  methods: {
    addCertificate() {
      // console.log(Object.keys(this.certificate).length);
      Object.keys(this.certificate)
        .filter((k, i) => i >= 100 && i < 300)
        .forEach((k) => console.log(this.certificate[k]));
      // for (
      //   let index = 0;
      //   index < Object.keys(this.certificate).length + 1;
      //   ++index
      // ) {
      //   const element = this.certificate[index];
      //   console.log(element);
      // }
      // axios
      //   .post("http://127.0.0.1:3000/createCertificate", {
      //     tenderid: "NCHC-P-106104",
      //     accountCode: "000",
      //     account: "00000000000000",
      //     name: "王小明",
      //     currency: "台幣",
      //     branch: "1234",
      //     amount: 49000000,
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //     this.$emit("close");
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
    mounted() {
      this.certificate = this.$store.state.certificate;
    },
  },
};
</script>

<style>
</style>