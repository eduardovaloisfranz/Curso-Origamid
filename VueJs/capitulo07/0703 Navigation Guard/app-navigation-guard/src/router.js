import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cursos from './views/Cursos.vue'
import Curso from './views/Curso.vue'
import DescricaoAulas from './views/DescricaoAulas'
import ListaAulas from './views/ListaAulas'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            name: 'Cursos',
            path: '/Cursos',
            component: Cursos,
            props: true,
            children: [{
                name: 'Curso',
                path: ':Curso',
                component: Curso,
                props: true,
                beforeEnter: (to, from, next) => {
                    console.log('Foi para Curso')
                    next()
                },
                children: [
                    {
                        name: 'DescricaoAulas',
                        path: '/DescricaoAulas',
                        component: DescricaoAulas
                    },
                    {
                        path: '/ListaAulas',
                        name: 'ListaAulas',
                        component: ListaAulas
                    }


                ]

            }]
        }
    ]
})