<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> 確定 </v-card-title>
      <v-card-text>確定繳交押標金 {{ this.$route.query.amount }} 元嗎？ {{ this.$route.query.amount }} 將會在您的帳戶凍結</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="$emit('close')"> No </v-btn>

        <!-- ------------------------------------------------------------- -->
        <!-- call API To Bank -->
        <v-btn color="green darken-1" text @click="$emit('close')"> Yes </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style>
</style>