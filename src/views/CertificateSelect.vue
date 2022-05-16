<template>
  <list-certificates />
</template>

<script>
export default {
  components: {
    "list-certificates":
      require("@/components/ＣertificateSelect/ListCertificate.vue").default,
  },
};
</script>
