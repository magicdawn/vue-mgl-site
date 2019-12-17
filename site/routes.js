import Layout from './components/layout.vue'
import Iframe from './components/iframe.vue'
// import demoRoutes from './demoRoutes'

const demoRoutes = [
  {
    path: 'antd-alert',
    component: () => import('../demo/antd-alert/index.vue'),
  },
  {
    path: 'antd-alert-cn',
    component: () => import('../demo/antd-alert/index.vue'),
  },
  {
    path: 'mgl-map',
    component: () => import('../demo/MglMap/index.vue'),
  },
  {
    path: 'mgl-map-cn',
    component: () => import('../demo/MglMap/index.vue'),
  },
]

export default [
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0]
      return {name, showDemo: true}
    },
    children: demoRoutes,
  },

  {
    path: '/iframe',
    component: Iframe,
    children: demoRoutes.map(item => ({
      ...item,
      props: route => {
        const hash = route.hash.replace('#', '')
        return {iframeName: hash}
      },
    })),
  },

  {
    path: '/',
    component: Layout,
    props: route => {
      const name = route.path.split('/docs/')[1].split('/')[0]
      return {name, showApi: true}
    },
    children: [
      {
        path: 'docs/introduce',
        component: () => import('../docs/introduce.en-US.md'),
      },
      {
        path: 'docs/introduce-cn',
        component: () => import('../docs/introduce.zh-CN.md'),
      },

      {
        path: 'docs/getting-started',
        component: () => import('../docs/getting-started.en-US.md'),
      },
      {
        path: 'docs/getting-started-cn',
        component: () => import('../docs/getting-started.zh-CN.md'),
      },

      {
        path: 'docs/changelog',
        component: () => import('../CHANGELOG.en-US.md'),
      },
      {
        path: 'docs/changelog-cn',
        component: () => import('../CHANGELOG.zh-CN.md'),
      },

      {
        path: 'docs/faq',
        component: () => import('../docs/faq.en-US.md'),
      },
      {
        path: 'docs/faq-cn',
        component: () => import('../docs/faq.zh-CN.md'),
      },
      {
        path: '',
        redirect: '/docs/introduce-cn/',
      },
    ],
  },
  {
    path: '/*',
    redirect: '/docs/introduce-cn/',
  },
]
