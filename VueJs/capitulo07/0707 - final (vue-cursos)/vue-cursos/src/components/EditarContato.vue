<template>
  <div role="group">
    <label for="input-email">Email:</label>
    <b-form-input
      id="input-email"
      v-model="contato.email"
      :state="validarEmail"
      aria-describedby="input-email-help input-email-feedback"
      placeholder="Digite seu Email"
      trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-email-feedback">Digite pelo menos 3 caracteres</b-form-invalid-feedback>
    <b-form-text id="input-email-help">Informe novo Email</b-form-text>

    <label for="input-endereco">Endereco:</label>
    <b-form-input
      id="input-endereco"
      v-model="contato.endereco"
      :state="validarEndereco"
      aria-describedby="input-endereco-help input-endereco-feedback"
      placeholder="Digite seu novo Endereco"
      trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-endereco-feedback">Digite pelo menos 10 caracteres</b-form-invalid-feedback>
    <b-form-text id="input-endereco-help">Informe novo Endereco</b-form-text>

    <label for="input-telefone">Telefone:</label>
    <b-form-input
      id="input-telefone"
      v-model="contato.telefone"
      :state="validarTelefone"
      aria-describedby="input-telefone-help input-telefone-feedback"
      placeholder="Digite seu novo Telefone"
      trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-telefone-feedback">Digite pelo menos 12 caracteres</b-form-invalid-feedback>
    <b-form-text id="input-telefone-help">Informe novo Telefone</b-form-text>

    <label for="input-descricao">Descricao:</label>
    <b-form-input
      id="input-descricao"
      v-model="descricao"
      :state="validarDescricao"
      aria-describedby="input-descricao-help input-descricao-feedback"
      placeholder="Digite a nova Descricao"
      trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-descricao-feedback">Digite pelo menos 10 caracteres</b-form-invalid-feedback>
    <b-form-text id="input-descricao-help">Informe a nova Descricao</b-form-text>
    <div class="d-flex justify-content-center">
      <b-button
        variant="success"
        type="submit"
        :disabled="formularioValidado"
        @click.prevent="emitContato"
      >Atualizar Informações</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditarContato",
  data() {
    return {
      contato: {
        email: "",
        endereco: "",
        telefone: ""
      },
      descricao: ""
    };
  },
  computed: {
    validarEmail() {
      return this.contato.email.length < 3 ? false : true;
    },
    validarEndereco() {
      return this.contato.endereco.length < 10 ? false : true;
    },
    validarTelefone() {
      return this.contato.telefone.length <= 12 ? false : true;
    },
    validarDescricao() {
      return this.descricao.length < 10 ? false : true;
    },
    formularioValidado() {
      if (
        this.validarEmail &&
        this.validarEndereco &&
        this.validarTelefone &&
        this.validarDescricao
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    emitContato() {
      this.$emit(
        "atualizar-contato",
        Object.assign(this.contato),
        Object.assign(this.descricao)
      );
    }
  }
};
</script>

<style>
</style>