import showBlog from './components/showBlog.vue'
import classblog from './components/classblog.vue'
import gitblog from './components/gitblog.vue'
import photography from './components/photography.vue'
import about from './components/about.vue'
import addblog from './components/addblog.vue'
import singleblog from './components/singleblog.vue'
import editblog from './components/editblog.vue'
import addgit from './components/addgit.vue'




export default[
    {path:"/",component:showBlog},
    {path:"/class",component:classblog},
    {path:"/git",component:gitblog},
    {path:"/photo",component:photography},
    {path:"/about",component:about},
    {path:"/add",component:addblog},
    {path:"/blog/:id",component:singleblog},
    {path:"/edit/:id",component:editblog},
    {path:"/addgit",component:addgit},


]