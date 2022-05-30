<template>
  <list-revoke-certificates />
</template>

<script>
export default {
  components: {
    "list-revoke-certificates":
      require("@/components/ＣertificateSelect/ListRevokeCertificate.vue").default,
  },
};
</script>
