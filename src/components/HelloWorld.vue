<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Entre com uma senha para criar sua carteira virtual</h1>
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="12345"
              v-model="password"
              @keypress.enter="submit"
            >
            <password v-model="password" :strength-meter-only="true" @score="enableSubmit"/>
          </div>
        </div>
        <button class="button is-primary" @click="submit" :disabled="!canSubmit">Criar Carteira</button>
      </div>
    </div>
  </section>
</template>

<script>
import Password from "vue-password-strength-meter";
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  components: { Password },
  data() {
    return {
      password: null,
      canSubmit: false
    };
  },
  methods: {
    ...mapActions(["getWallet"]),
    enableSubmit(score) {
      if (score === 3) {
        this.canSubmit = true;
      }
    },
    submit() {
      if (!this.canSubmit) {
        return;
      }
      this.getWallet(this.password).then(() => {
        this.$router.push("transactions");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
