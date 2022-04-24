<template>
  <v-row justify="center">
    <v-dialog :value="true" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">創建憑證</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="bankCode"
                  :items="$store.state.banks"
                  label="銀行代碼*"
                  required
                  :rules="rules"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="bankAccount"
                  label="銀行帳號*"
                  required
                  :rules="accountRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="bankName"
                  label="戶名*"
                  hint="必須與公司抬頭相同"
                  persistent-hint
                  required
                  :rules="rules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="bankCurrecy"
                  :items="$store.state.accountCurrecy"
                  label="帳戶別*"
                  required
                  :rules="rules"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="branchName"
                  label="分行別*"
                  hint="請用4碼分行代碼"
                  persistent-hint
                  required
                  type="number"
                  :rules="branchRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="bankAmount"
                  label="設定金額*"
                  required
                  type="number"
                  min="1"
                  :rules="amountRules"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addCertificate"
            :disabled="inputInvaild"
          >
            Save
          </v-btn>
        </v-card-actions>
        
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'refresh',
    inject: ['reload'],
    methods: {
          refresh () {
              this.reload()
          }
    },
  data() {
    return {
      bankCode: "",
      bankAccount: "",
      bankName: "",
      bankCurrecy: "",
      branchName: "",
      bankAmount: "",
      tenderAmount: "",
      certificateAmont: "",
      res: "",
      rules: [(value) => !!value || "Required."],
      amountRules: [
        (value) => !!value || "Required.",
        (value) => value <= Number(this.tenderAmount) - Number(this.certificateAmont) || "不能高於" + this.res,
      ],
      accountRules: [
        (value) => !!value || "Required.",
        (value) => (value || "").length <= 14 || "Max 14 characters",
      ],
      branchRules:[
        (value) => !!value || "Required.",
        (value) => (value || "").length == 4 || "Must 4 characters",
      ]
    };
  },
  methods: {
    addCertificate() {
      let newCertificate = {
        id:
          Date.now() + this.$route.query.id + this.bankCode + this.bankAccount,
        code: this.bankCode.substr(0,3),
        account: this.bankAccount.replace(/ /g,'').padStart(14, '0'),
        name: this.bankName.replace(/ /g,''),
        accountCurrecy: this.bankCurrecy.replace(/ /g,''),
        branchName: this.branchName.replace(/ /g,''),
        amount: this.bankAmount.replace(/ /g,''),
        tendersID: this.$route.query.id,
      };

      this.$store.commit("addCertificate", newCertificate);
      this.$emit("close");
      this.reload();
      
    },
  },
  computed: {
    inputInvaild() {
      this.tenderAmount = this.$route.query.amount
      this.certificateAmont = this.$store.state.currentCertificateAmount
      
      // console.log(this.res)
      // console.log(Number(this.tenderAmount) - Number(this.res))
      return (
        this.bankCode.trim() === "" ||
        this.bankAccount.trim() === "" ||
        this.bankName.trim() === "" ||
        this.bankCurrecy.trim() === "" ||
        this.branchName.trim() === "" ||
        this.bankAmount.trim() === "" ||
        Number(this.bankAmount) > Number(this.tenderAmount)  - Number(this.certificateAmont) ||
        // Number(this.bankAmount) > Number(this.tenderAmount) - Number(this.certificateAmont) ||
        Number(this.bankAmount) < 1
        
      );
    

      // return Number(this.bankAmountChange) < 0 || Number(this.bankAmountChange) > Number(this.tenderAmountChange)
    },
  },
  mounted(){
    this.res =  Number(this.tenderAmount) - Number(this.certificateAmont).toString()
  }
};
</script>

<style>
</style>