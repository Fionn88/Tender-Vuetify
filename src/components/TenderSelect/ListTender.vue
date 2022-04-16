<template>
  <v-list class="pt-0" two-line flat>
    <v-list-item-group
      multiple
      v-for="tender in $store.state.tenders"
      :key="tender.id"
    >
      <v-list-item  @click="listDetail(tender.id, tender.title, tender.amount, tender.relaseDate, tender.terminationDate)">
        <template>
          <v-list-item-content>
            <v-list-item-title>{{ tender.id }}</v-list-item-title>
            <v-list-item-subtitle>{{ tender.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-list-item-group>
  </v-list>
</template>

<script>
import router from '../../router'
export default {
  methods: {
    listDetail(id, title, amount, relaseDate, terminationDate) {
      let passData = {
        id: id,
        title: title,
        amount: amount,
        relaseDate: relaseDate,
        terminationDate: terminationDate
      }
      console.log(passData)
      router.push({
        name: 'TenderDetail',
        query:{
        id: id,
        title: title,
        amount: amount,
        relaseDate: relaseDate,
        terminationDate: terminationDate
        },
        params:{
          items: passData
        }
      })
    },
  },
};
</script>

<style>
</style>