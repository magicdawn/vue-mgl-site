import Layout from './components/layout.vue'
import Iframe from './components/iframe.vue'
import {paramCase} from 'change-case'
// import demoRoutes from './demoRoutes'

const keys = [
  'MglMap',
  'MglComponentMixin',

  'MglControlGroup',
  'MglNavigationControl',
  'MglGeolocateControl',
  'MglAttributionControl',
  'MglScaleControl',
  'MglFullscreenControl',

  'MglCustomControl',
  'MglFlyToControl',
  'MglPitchControl',

  'MglMarker',
  'MglPopup',

  'MglSource',
  'MglLayer',
  'MglImageLayer',
  'MglVideoLayer',
  'MglRasterLayer',
  'MglPolygon',
]

export const demoRoutes = [
  ...keys.map(key => {
    return {
      path: paramCase(key),
      component: () => import(`../demo/${key}/index.vue`),
    }
  }),

  ...keys.map(key => {
    return {
      path: paramCase(key) + '-cn',
      component: () => import(`../demo/${key}/index.vue`),
    }
  }),
]

export default [
  {
    name: 'components',
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
    name: 'docs',
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
        redirect: '/docs/introduce/',
      },
    ],
  },
  {
    path: '/*',
    redirect: '/docs/introduce/',
  },
]
