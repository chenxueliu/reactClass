import React, { lazy, Suspense } from 'react'
const Home = lazy(() => import('../component/home.jsx'))
const News = lazy(() => import('../component/news.jsx'))
const routes = [
  {
    path: '/home',
    label: '首页',
    component: props => (
      <Suspense fallback="loading...">
        <Home {...props} />
      </Suspense>
    )
  },
  {
    path: '/news',
    label: '新闻',
    component: props => (
      <Suspense fallback="loading...">
        <News {...props} />
      </Suspense>
    )
  }
]
export default routes
