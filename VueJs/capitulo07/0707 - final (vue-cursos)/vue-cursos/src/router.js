import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Contato from './views/Contato'
import Cursos from './views/Cursos'
import Curso from './views/Curso'
import Aula from './views/Aula'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'cursos',
            path: '/cursos',
            component: Cursos
        },
        {
            name: 'curso',
            path: '/cursos/:curso',
            component: Curso,
            props: true,
            children: [
                {
                    name: 'aula',
                    path: ':aula',
                    props: true,
                    component: Aula
                }
            ]

        },
        {
            name: 'contato',
            path: '/contato',
            component: Contato
        },
        {
            path: '*',
            redirect: '/'
        }

    ]
})