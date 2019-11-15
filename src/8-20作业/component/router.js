export const router = [
    {
        path: '/one', title: 'jquery表单插件', child: [
            {
                path: '/one/01',
                title: 'jquery灯箱效果',
                child: [
                    {
                        path: '/one/01/001',
                        title: '三级导航1'
                    },
                    {
                        path: '/one/01/002',
                        title: '三级导航2'
                    },
                    {
                        path: '/one/01/003',
                        title: '三级导航3'
                    }
                ]
            },
            {
                path: '/one/02',
                title: 'jquery图片延迟加载'
            },
            {
                path: '/one/03',
                title: 'jquery图片裁剪'
            },
            {
                path: '/one/04',
                title: 'jquery焦点图轮动'
            }
        ]
    },
    {
        path: '/two', title: 'jquery图像插件', child: [
            {
                path: '/two/01',
                title: '瀑布'
            },
            {
                path: '/two/02',
                title: 'jquery圆角动画'
            },
            {
                path: '/two/03',
                title: 'jquery幻灯片'
            },
            {
                path: '/two/04',
                title: 'jquery空间相册'
            }
        ]
    }
]