import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", redirect: '/home',
        children: [
            { path: '/home', component: () => import('../views/Home.vue'),
            meta: { isAuth: true},
            },
            {
                path: '/personalCenter', component: () => import('../views/PersonalCenter.vue'), redirect: '/personalCenter/info',
                children: [
                    { path: 'info', component: () => import('../components/personalcenter/MyInfo.vue') },
                    { path: 'asset', component: () => import('../components/personalcenter/MyAsset.vue') },
                    { path: 'safety', component: () => import('../components/personalcenter/MySafety.vue') },
                ]
            },
            {
                path: '/market', component: () => import('../views/Market.vue'), redirect: '/market/fleamarket',
                children: [
                    { path: 'fleamarket', component: () => import('../components/market/fleamarket/FleaMarket.vue') },
                    { path: 'find', component: () => import('../components/market/find/FindCard.vue') },
                    { path: 'lost', component: () => import('../components/market/lost/LostCard.vue') },
                    { path: 'merchant', component: () => import('../components/market/merchant/MerChant.vue') }
                ]
            },
            {
                path: '/classmanage', component: () => import('../views/ClassManage.vue'), redirect: '/classmanage/home', meta: { title: '主页' },
                children: [
                    { path: 'home', component: () => import('../components/classmanage/home/HomeMain.vue') },
                    {
                        path: 'class', component: () => import('../components/classmanage/class/ClassMain.vue'),
                        meta: { title: '班级' },
                        children: [
                            { path: 'table', name: 'table', component: () => import('../components/classmanage/class/MemberTable.vue'), meta: { title: '成员管理' } }
                        ]
                    },
                    {
                        path: 'task', component: () => import('../components/classmanage/task/TaskMain.vue'), meta: { title: '我的任务' },
                        children: [
                            { path: 'publishtask', name: "publish", component: () => import('../components/classmanage/publish/PublishTask.vue') }
                        ]
                    },
                    { path: 'chat', component: () => import('../components/classmanage/chat/ChatMain.vue'), meta: { title: '群聊' } },
                ]
            },
            {
                path: '/community', component: () => import('../views/Community.vue'),redirect:'/community/saysomething',
                children: [
                    {path:'saysomething',component:()=>import('../components/community/SaySomething.vue')},
                    {path:'chathall',component:()=>import('../components/community/ChatHall.vue'), },
                    {path:'chatroom',component:()=>import('../components/community/ChatRoom.vue'),name:'chatroom'},
                    {path:'sentense',component:()=>import('../components/community/Sentense.vue')},
                    {path:'letter',component:()=>import('../components/community/Letter.vue')}
                ]
            },
            { path: '/collegeinfo', component: () => import('../views/CollegeIfo.vue'), }

        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router