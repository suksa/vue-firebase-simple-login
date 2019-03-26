import firebase from 'firebase';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '@/components/Hello.vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'*',
            redirect:'/login'
        },
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/sign-up',
            name:'SignUp',
            component:SignUp
        },
        {
            path:'/hello',
            name:'hello',
            component:Hello,
            meta:{
                requiresAuth:true
            }
        }
    ]
});

router.beforeEach((to,from,next)=>{
    const currentUser = firebase.auth().currentUser;//로그인 했는지
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);//로그인필요페이지
    console.log(`${from.name}에서 ${to.name}로 이동`)
    console.log('로그인했는지 : '+Boolean(currentUser))
    console.log('로그인필요페이지 : '+Boolean(requiresAuth))

    if(requiresAuth && !currentUser){
        alert('회원 접근 가능')
        next('login'); //비회원이 hello접근시 login으로
    }
    else if(!requiresAuth && currentUser){
        alert('비회원 접근 가능')
        next('hello'); // 일반페이지를 회원이 접근하면 hello로
    } 
    else next();
});

export default router;


