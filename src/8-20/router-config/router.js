import React from "react";
import { renderRoutes } from "react-router-config";

const routes = [
  {
    path: "/",
    exact: true,
    component: props => <div>首页</div>
  },
  {
    path: "/news",
    component: props => (
      <div>
        新闻
        {console.log(props)}
        {renderRoutes(props.route.routes)}
      </div>
    ),
    routes: [
      {
        path: "/news/:id",
        component: props => <div>新闻-资讯</div>
      }
    ]
  }
];

export default routes;
