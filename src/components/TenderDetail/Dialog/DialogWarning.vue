<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5 primary"> Warning </v-card-title>
      <v-card-text> 憑證金額不夠，請申請憑證 </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="$emit('close')"> 知道了 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
};
</script>

<style>
</style>