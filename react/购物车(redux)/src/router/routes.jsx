/* 一级路由 */import WrapPage from "component/WrapPage";
/* 二级路由 */import Home from 'component/WrapPage/Home'
/* 二级路由 */import Micro from 'component/WrapPage/Micro'
/* 二级路由 */import News from 'component/WrapPage/News'
/* 二级路由 */import ShopCar from 'component/WrapPage/ShopCar'
/* 二级路由 */import My from 'component/WrapPage/My'

const RouteConfig = [
    {
        path: "/WrapPage",
        component: WrapPage,
        children: [
            {
                path: "/WrapPage/Home",
                component: Home,
            },
            {
                path: "/WrapPage/Micro",
                component: Micro,
            },
            {
                path: "/WrapPage/News",
                component: News,
            },
            {
                path: "/WrapPage/ShopCar",
                component: ShopCar,
            },
            {
                path: "/WrapPage/My",
                component: My,
            },
        ]
    }
]

export default RouteConfig;