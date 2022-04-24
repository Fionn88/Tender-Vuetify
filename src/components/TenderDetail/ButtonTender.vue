<template>
  <div class="fixed-bottom " :value="true">
    <v-row align="center" justify="space-around" >
      <v-btn @click="createClick()">創建憑證</v-btn>
      <!-- ----------------------- -->
      <!-- 創建憑證後加起來的數字塞進 sureClick 的第二個參數 -->
      <v-btn
        color="primary"
        @click="sureClick(tenderAmount, certificateAmount)"
      >
        確認
      </v-btn>
      <dialog-warning v-if="dialogs.warning" @close="dialogs.warning = false" />
      <dialog-sure-apply v-if="dialogs.apply" @close="dialogs.apply = false" />
    </v-row>
    <dialog-create-certificate
      v-if="dialogs.create"
      @close="dialogs.create = false"
    />
    
  </div>
</template>

<script>
export default {
  name: "TenderDetail",
  data: () => {
    return {
      tenderAmount: "",
      certificateAmount: "",
      dialogs: {
        warning: false,
        apply: false,
        create: false,
      },
    };
  },
  methods: {
    sureClick(tenderAmount, certificateAmount) {
      if (tenderAmount > certificateAmount) {
        this.dialogs.warning = true;
        console.log("this.dialogs.warning: " + this.dialogs.warning);
      } else if (tenderAmount == certificateAmount) {
        this.dialogs.apply = true;
        console.log("this.dialogs.apply: " + this.dialogs.apply);
      }
    },
    createClick() {
      this.dialogs.create = true;
      console.log("this.dialogs.create: " + this.dialogs.create);
    },
  },
  mounted() {
    this.tenderAmount = this.$route.query.amount
    this.certificateAmount = this.$store.state.currentCertificateAmount
  },
  components: {
    "dialog-warning":
      require("@/components/TenderDetail/Dialog/DialogWarning.vue").default,
    "dialog-sure-apply":
      require("@/components/TenderDetail/Dialog/DialogSureApply.vue").default,
    "dialog-create-certificate":
      require("@/components/TenderDetail/Dialog/DialogCreateCertificate.vue")
        .default,
    "list-certificate": require("@/components/TenderDetail/ListCertificate.vue")
      .default,
  },
};
</script>

<style>
