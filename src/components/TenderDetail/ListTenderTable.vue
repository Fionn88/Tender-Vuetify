<template>
  <div class="ListTenderTable pa-6">
    <div class="ListTenderTable pa-6">
      <button-tender />
    </div>
    <v-data-table
      :headers="headers"
      :items="desserts"
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
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
      ],
      desserts: [
        {
          name: "標案名稱 : ",
          row: ` ${this.$route.query.title}`,
          fat: "招標日期 :",
          carbs: ` ${this.$route.query.relaseDate}`,
        },
        {
          name: "標案案號 : ",
          row: ` ${this.$route.query.id}`,
          fat: "決標日期 :",
          carbs: ` ${this.$route.query.terminationDate}`,
        },
        {
          name: "標案金額 :",
          row: ` ${this.$route.query.amount}`,
          fat: "目前憑證金額 :",
          carbs: "0"
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