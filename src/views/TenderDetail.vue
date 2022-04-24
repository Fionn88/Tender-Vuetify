<template>
<list-tender-table />
</template>

<script>
export default {
  components:{
    "list-tender-detail": require('@/components/TenderDetail/ListTenderDetail.vue').default,
    "list-tender-table": require('@/components/TenderDetail/ListTenderTable.vue').default
  
  }

};
</script>

<style>
</style>