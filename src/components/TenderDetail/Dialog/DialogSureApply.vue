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
      step: "",
      certificates: this.$store.state.certificates,
    };
  },
  methods: {
    addCertificate() {
      // console.log(Object.keys(this.certificate).length);
      Object.keys(this.certificates)
        .filter((k, i) => i >= 100 && i < 300)
        .forEach((k) => console.log(this.certificates[k]));

      console.log("addCertificate");
      console.log(this.certificates);
      console.log(this.$store.state.certificates);

      for (
        let index = 0;
        index < Object.keys(this.certificates).length ;
        ++index
      ) {
        const element = this.certificates[index];
        console.log(element);
        axios.get('https://tender-backend.fishlab.com.tw/tenderquery',{
        })
        .then(resp => {
          console.log(resp)
        this.tenders = resp.data.tender
        }).catch(err => {
          console.log(err);
        })
      }

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
      this.certificates = this.$store.state.certificates;
      this.step = "mounted";
      console.log(this.step);
      console.log(this.certificates);
      console.log(this.$store.state.certificates);
    },
  },
};
</script>

<style>
</style>