<template>
<div class="list-certificate pa-6">
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">銀行代碼</th>
          <th class="text-left">銀行帳號</th>
          <th class="text-left">戶名</th>
          <th class="text-left">帳戶別</th>
          <th class="text-left">分行別</th>
          <th class="text-left">金額</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="certificate in $store.state.certificates" :key="certificate.id">
          <td>{{ certificate.code }}</td>
          <td>{{ certificate.account }}</td>
          <td>{{ certificate.name }}</td>
          <td>{{ certificate.accountCurrecy }}</td>
          <td>{{ certificate.branchName }}</td>
          <td>{{ certificate.amount }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>

</template>

<script>
export default {
 
};
</script>

<style>
</style>