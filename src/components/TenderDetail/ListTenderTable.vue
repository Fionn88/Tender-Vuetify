<template>
  <div class="ListTenderTable pa-6">
    <div class="ListTenderTable pa-6">
      <button-tender />
    </div>
    <v-data-table
      :headers="headers"
      :items="values"
      hide-default-header
      hide-default-footer
      class="elevation-2"
    ></v-data-table>
    <list-certificate />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Title", value: "name" },
        { text: "Row", value: "row" },
        { text: "Title2", value: "name2" },
        { text: "Row2", value: "row2" },
      ],
      values: [
        {
          name: "標案名稱 : ",
          row: ` ${this.$route.query.title}`,
          name2: "招標日期 :",
          row2: ` ${this.$route.query.relaseDate}`,
        },
        {
          name: "標案案號 : ",
          row: ` ${this.$route.query.id}`,
          name2: "決標日期 :",
          row2: ` ${this.$route.query.terminationDate}`,
        },
        {
          name: "標案金額 :",
          row: ` ${this.$route.query.amount}`,
          name2: "目前憑證金額 :",
          row2: ` ${this.$store.state.currentCertificateAmount}`
        }
      ],
    };
  },
  components: {
    "button-tender": require("@/components/TenderDetail/ButtonTender.vue")
      .default,
    "list-certificate": require("@/components/TenderDetail/ListCertificate.vue")
      .default,
  },
};
</script>


<style>
</style>