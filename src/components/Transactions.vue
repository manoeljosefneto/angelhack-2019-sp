<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>
            <abbr title="Position">Controlador</abbr>
          </th>
          <th>
            <abbr title="Played">Permisões</abbr>
          </th>
          <th>
            <abbr title="Won">Outro</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in tableTransactions" :key="index">
          <td>{{transaction}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";
import axios from "../plugins/http";
export default {
  beforeRouteEnter(to, from, next) {
    if (!store.state.wallet) {
      return;
    }
    axios
      .get(`/transactions?wallet=${store.state.wallet}`)
      .then(response => {
        store.commit(
          "setTransactions",
          response.data.data.blocks.map(transaction => transaction.blocks)
        );
        next();
      })
      .catch(err => {});
  },
  computed: {
    ...mapState(["transactions"]),
    tableTransactions() {
      return this.transactions.map(tr => ({
        from: tr.wallet.substring(0, 4),
        to: tr.toWallet.substring(0, 4),
        data: data
      }));
    }
  }
};
</script>

<style>
</style>
