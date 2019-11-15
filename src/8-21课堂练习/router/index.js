import React, { lazy, Suspense } from 'react'
const Home = lazy(() => import('../component/home'))
const News = lazy(() => import('../component/new'))
const routes = [
  {
    path: '/home',
    label: '首页',
    component: props => {
      return (
        <Suspense fallback="loading...">
          <Home {...props} />
        </Suspense>
      )
    }
  },
  {
    path: '/news',
    label: '新闻',
    component: props => {
      return (
        <Suspense fallback="loading...">
          <Home {...props} />
        </Suspense>
      )
    }
  }
]
export default routes
