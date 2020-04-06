import Vue from 'vue'
import Router from 'vue-router'
import Acao from './views/Acao'
import DetalheAcao from './views/DetalheAcao'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        name: 'Acao',
        path: '/Acao',
        component: Acao,
        children: [{
            name: 'Simbolo',
            path: ':Simbolo',
            component: DetalheAcao,
            props: true
        }]
    }]
})