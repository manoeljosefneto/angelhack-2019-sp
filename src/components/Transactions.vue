<template>
  <div class="container">
    <table class="table is-bordered">
      <thead>
        <tr>
          <th>
            <abbr title="Position">Controlador</abbr>
          </th>
          <th>
            <abbr title="Played">Permisões</abbr>
          </th>
          <th>
            <abbr title="Won">Operador</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in tableTransactions" :key="index">
          <td>{{transaction.to.$oid}}</td>
          <td>
            <div class="container">
              <table class="table is-fullwidth">
                <thead>
                  <th>Name</th>
                  <th>RG</th>
                  <th>CPF</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {{transaction.data.nome}}
                      <br>
                      <label class="checkbox">
                        <input type="checkbox">
                        Aggre
                      </label>
                    </td>
                    <td>
                      {{transaction.data.rg}}
                      <br>
                      <label class="checkbox">
                        <input type="checkbox">
                        Aggre
                      </label>
                    </td>
                    <td>
                      {{transaction.data.cpf}}
                      <br>
                      <label class="checkbox">
                        <input type="checkbox">
                        Aggre
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>

          <td>{{transaction.from.$oid}}</td>
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
  // beforeRouteEnter(to, from, next) {
  //   if (!store.state.wallet) {
  //     return;
  //   }
  //   axios
  //     .get(`/transactions?wallet=${store.state.wallet}`)
  //     .then(response => {
  //       store.commit(
  //         "setTransactions",
  //         response.data.data.blocks.map(transaction => transaction.blocks)
  //       );
  //       next();
  //     })
  //     .catch(err => {});
  // },
  mounted() {
    this.$axios
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
      return [
        {
          to: {
            $oid: "5ceab787fc13ae05f7000000"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000001"
          },
          data: {
            nome: "Elisabet Chester",
            rg: "2505306923",
            cpf: "6538153755"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f7000002"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000003"
          },
          data: {
            nome: "Dolores Scotchbourouge",
            rg: "0741317265",
            cpf: "9570705434"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f7000004"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000005"
          },
          data: {
            nome: "Gail Few",
            rg: "5973994120",
            cpf: "3948239533"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f7000006"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000007"
          },
          data: {
            nome: "Shamus Malden",
            rg: "3438531607",
            cpf: "8142807238"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f7000008"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000009"
          },
          data: {
            nome: "Lark Arderne",
            rg: "3640606620",
            cpf: "1062950461"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f700000a"
          },
          from: {
            $oid: "5ceab787fc13ae05f700000b"
          },
          data: {
            nome: "Phaidra Ambrogio",
            rg: "4188541628",
            cpf: "9988194021"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f700000c"
          },
          from: {
            $oid: "5ceab787fc13ae05f700000d"
          },
          data: {
            nome: "Madelle Hutcheon",
            rg: "3599181500",
            cpf: "0625833120"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f700000e"
          },
          from: {
            $oid: "5ceab787fc13ae05f700000f"
          },
          data: {
            nome: "Stepha Bloomfield",
            rg: "1979673780",
            cpf: "2735517233"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f7000010"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000011"
          },
          data: {
            nome: "Laurianne Ceeley",
            rg: "1261827481",
            cpf: "6255435814"
          }
        },
        {
          to: {
            $oid: "5ceab787fc13ae05f7000012"
          },
          from: {
            $oid: "5ceab787fc13ae05f7000013"
          },
          data: {
            nome: "Rooney Chaise",
            rg: "9327247523",
            cpf: "8000205491"
          }
        }
      ];
    }
  }
};
</script>

<style>
</style>
