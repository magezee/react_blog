// 统一管理路由并导出
import {
    Home,
    NotFound,
    AboutBlog,
    BlogArticle,
    Essay,
    MessageBoard,
    Other
} from '../views'



export const routers = [
    {
        pathname: '/',
        viewCompoment:Home,
        exact:true
    },{
        pathname: '/404',
        viewCompoment: NotFound
    },{
        pathname: '/aboutBlog',
        viewCompoment: AboutBlog,
        excat:true
    },{
        pathname: '/blogArticle',
        viewCompoment: BlogArticle,
        exact:true
    },{
        pathname: '/essay',
        viewCompoment: Essay,
        exact:true
    },{
        pathname: '/messageBoard',
        viewCompoment: MessageBoard,
        exact:true
    },{
        pathname: '/other',
        viewCompoment: Other,
        exact:true
    }
]
