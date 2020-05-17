import {Loading} from '../components'
import Loadable from 'react-loadable'

// 封装成更方便的函数，不用多次写loading了
const loaderFun = (loader, loading = Loading) => {
    return Loadable({
        loader,
        loading
    })
}

const Home = loaderFun(() => import('./Home'))
const NotFound = loaderFun(() => import('./NotFound'))
const AboutBlog = loaderFun(() => import('./AboutBlog'))
const BlogArticle = loaderFun(() => import('./BlogArticle'))
const Essay = loaderFun(() => import('./Essay'))
const MessageBoard = loaderFun(() => import('./MessageBoard'))
const Other = loaderFun(() => import('./Other'))


export { 
    Home,
    NotFound,
    AboutBlog,
    BlogArticle,
    Essay,
    MessageBoard,
    Other
}