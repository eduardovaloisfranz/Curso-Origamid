import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
//import Cursos from './views/Cursos'
const Cursos = () => import('./views/Cursos.vue')
const Curso = () => import('./views/Curso.vue')
import CursoDescricao from './views/CursoDescricao'
import CursoAulas from './views/CursoAulas'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            components: {
                default: Home,
                sidebar: CursoDescricao
            },
        },
        {
            name: 'cursos',
            path: '/cursos',
            component: Cursos,
            children:
                [
                    {
                        name: 'curso',
                        path: ':curso',
                        component: Curso,
                        props: true,
                        children:
                            [
                                {
                                    name: 'cursoDescricao',
                                    path: '/descricao',
                                    components: {
                                        default: CursoDescricao,
                                        sidebar: Home
                                    }
                                },
                                {
                                    name: 'cursoAulas',
                                    path: '/aulas',
                                    components: {
                                        default: CursoAulas,
                                        sidebar: Home
                                    }

                                }
                            ]
                    }
                ]
        },
        {
            path: '/origamid',
            redirect: '/'
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        to
        from
        savedPosition
        return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
})
