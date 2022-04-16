<template>
  <div class="home pa-6">
    <list-tenders />
  </div>
</template>

<script>
export default {
  name: "Home",
  components:{
    "list-tenders": require("@/components/TenderSelect/ListTender.vue").default 
  }
};
</script>
