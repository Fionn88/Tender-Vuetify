<template>
  <div class="ListCertificateAmount pa-6">
    <v-treeview open-all :items="this.initInfoTwo" :key="this.id"></v-treeview>
    <div class="ListCertificateAmount pa-6">
      <button-tender />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    id: "",
    initInfoTwo: {
        id: 2,
        name: "您的個人資訊 :" + current,
      }
    };
  },
  mounted(){
      this.id = this.$route.query.id
  }
};
</script>

<style>
</style>