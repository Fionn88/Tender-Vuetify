<template>
  <div class="TenderDetail pa-6">
    <v-treeview
      open-all
      :items="this.initInfo"
      :key="this.id"
    ></v-treeview>
    <div class="TenderDetail pa-6">
      <button-tender />
    </div>
  </div>
</template>

<script>
export default {
  name: "TenderDetail",
  data() {
    return {
      initInfo: [],
      id: ""
    };
  },

  mounted() {
    this.id = this.$route.query.id,
    this.initInfo= [
        {
          id: 1,
          name: "投標案資訊 :",
          children: [
            { id: 1.1, name: "標案名稱 :" + ` ${this.$route.query.title}` },
            { id: 1.2, name: "標案案號 :" + ` ${this.$route.query.id}` },
            { id: 1.3, name: "標案金額 :" + ` ${this.$route.query.amount}` },
            {
              id: 1.4,
              name: "招標日期 :" + ` ${this.$route.query.relaseDate}`,
            },
            {
              id: 1.5,
              name: "決標日期 :" + ` ${this.$route.query.terminationDate}`,
            },
          ],
        },
      ]
  },
  components: {
    "button-tender": require("@/components/TenderDetail/ButtonTender.vue")
      .default,
  },
};
</script>

<style>
</style>