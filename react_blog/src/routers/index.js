// /src/routers/index.js
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



export  const routers = [
    {   
        title: '首页',
        pathname: '/',
        viewCompoment:Home,     
        exact:true,
        isNav:true
    },{
        title: '404',
        pathname: '/404',
        viewCompoment: NotFound    
    },{
        title: '关于博客',
        pathname: '/aboutBlog',
        viewCompoment: AboutBlog,   
        excat:true,
        isNav:true
    },{
        title: '博客文章',
        pathname: '/blogArticle',
        viewCompoment: BlogArticle,     
        exact:true,
        isNav:true
    },{
        title: '随笔',
        pathname: '/essay',
        viewCompoment: Essay,       
        exact:true,
        isNav:true
    },{
        title: '留言板',
        pathname: '/messageBoard',
        viewCompoment: MessageBoard,    
        exact:true,
        isNav:true
    },{
        title: '其他',
        pathname: '/other',
        viewCompoment: Other,       
        exact:true,
        isNav:true
    }
]
