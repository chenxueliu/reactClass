export const router = [
  {
    path: "/home",
    label: "首页",
    child: [
      {
        path: "/home/left",
        label: "首页-左侧",
        child: [
          {
            path: "/home/left/1",
            label: "1"
          },
          {
            path: "/home/left/2",
            label: "2"
          }
        ]
      },
      {
        path: "/home/right",
        label: "首页-右侧"
      }
    ]
  },
  {
    path: "/news",
    label: "新闻"
  }
];
