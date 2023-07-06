import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "../views/login"
import Main from "../views/Main"
import Test from "../components/HelloWorld"
import Index from "../views/index"
import Product from "../views/manage/product"
import Category from "../views/manage/category"
import ProductManage from "../views/manage/productmanage"
import StudentInformation from "../project/StudentInformation"
const router = new VueRouter({
    routes: [{
        path: "/login",
        component: Login
    }, {
        path: "/",
        component: Main,
        children: [{
            path: "/index",
            component: Index
        }, {
            path: "/product",
            component: Product
        },{
            path: "/category",
            component: Category
        },{
            path: "/productmanage",
            component: ProductManage
        }]
    }, {
        path: "/test",
        component: Test
    },{
        path: "/studentinformation",
        component: StudentInformation
    }]
})
export default router