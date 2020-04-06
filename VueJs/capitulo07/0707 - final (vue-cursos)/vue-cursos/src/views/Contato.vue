<template>
  <div>
    <Navbar />
    <div v-if="loading" class="pt-3 d-flex justify-content-center">
      <b-button variant="primary" disabled>
        <b-spinner small type="grow"></b-spinner>Carregando...
      </b-button>
    </div>
    <div v-else>
      <b-container>
        <b-row @click="handleClick()">
          <b-col cols="12">
            <h2 class="h2">Contato</h2>
            <p>{{descricao}}</p>
            <ul>
              <li v-for="(valor, chave) in contato" :key="chave">
                {{chave}}:
                <small class="text-muted">{{valor}}</small>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-modal
        id="modal-multi-1"
        size="lg"
        v-model="abrirModal"
        title="Contato edit"
        ok-only
        no-stacking
      >
        <p class="mt-2">Teste</p>
        <div class="d-flex justify-content-end">
          <b-button variant="success" class="mr-3" v-b-modal.modal-multi-2>Editar</b-button>
          <b-button variant="danger" @click="abrirModal = false">Fechar</b-button>
        </div>
        <template v-slot:modal-footer>
          <div></div>
        </template>
      </b-modal>
    </div>
    <b-modal id="modal-multi-2" title="Second Modal" ok-only size="lg">
      <EditarContato @atualizar-contato="emitData" />
      <template v-slot:modal-footer></template>
    </b-modal>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import EditarContato from "@/components/EditarContato";

export default {
  name: "contato",
  data() {
    return {
      loading: true,
      descricao: "",
      contato: {},
      abrirModal: false
    };
  },
  components: {
    Navbar: Navbar,
    EditarContato: EditarContato
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        const URL_TO_FETCH = "http://localhost:3000/contato";
        fetch(URL_TO_FETCH).then(r =>
          r.json().then(r => {
            this.descricao = r.descricao;
            this.contato = r.contato;
            this.loading = false;
          })
        );
      }, 1500);
    },
    handleClick() {
      this.abrirModal = true;
    },
    emitData(contato, descricao) {
      const { email, telefone, endereco } = contato;
      this.contato.email = email;
      this.contato.telefone = telefone;
      this.contato.endereco = endereco;
      this.descricao = descricao;
      this.abrirModal = false;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>