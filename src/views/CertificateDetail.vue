<template>
<list-certificate-table/>
</template>

<script>
export default {
  components: {
    "list-certificate-table":
      require("@/components/CertificateDetail/ListCertificateTable.vue").default
  },
};
</script>

<style>
</style>