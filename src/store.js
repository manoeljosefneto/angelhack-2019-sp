import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "http://localhost:3002/"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wallet: null,
    transactions: []
  },
  mutations: {
    setWallet(state, payload) {
      state.wallet = payload
    },
    setTransactions(state, payload) {
      state.transactions = payload
    },
    addTransaction(state, payload) {
      state.transactions.push(payload)
    }
  },
  actions: {
    getWallet({
      commit
    }, payload) {
      return _axios.post('/wallet', {
          password: payload.password
        })
        .then((response) => {
          commit('setWallet', response.data.data.hash)
        }).catch((err) => {
          console.log(err);

        });
    }
  }
})