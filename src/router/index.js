import { createWebHistory, createRouter } from "vue-router";
// import Register from "@/views/RegisterPage.vue";
import Login from "@/views/LoginPage.vue";
import AdminUser from "@/views/user/AdminUser.vue";
import Product from "@/views/product/AdminProduct.vue";
import OrderManager from "@/views/order/OrderManager.vue";
import PageAdmin from "@/components/PageAdmin.vue";
import AdminPublisher from "@/views/publisher/AdminPublisher.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },

    {
        path: "/adminpage",
        name: "admin",
        component: PageAdmin,
    },

    {
        path: "/admin",
        name: "adminpage",
        component: AdminUser,
    },

    //user
    {
        path: "/admin/user/user/:id",
        name: "contact.edit",
        component: () => import("@/views/user/UserEdit.vue"),
        props: true
    },
    //Publisher
    {
        path: "/admin/publish",
        name: "publishadmin",
        component: AdminPublisher,
    },
    {
        path: "/admin/publish/addpublish",
        name: "publish.add",
        component: () => import("@/views/publisher/PublisherAdd.vue"),
        props: true
    },
    {
        path: "/admin/publish/editpublish/:id",
        name: "publish.edit",
        component: () => import("@/views/publisher/PublisherEdit.vue"),
        props: true
    },
    {
        path: "/admin/product",
        name: "productadmin",
        component: Product,
    },
    {
        path: "/admin/product/addproduct",
        name: "product.add",
        component: () => import("@/views/product/ProductAdd.vue"),
        props: true
    },
    {
        path: "/admin/product/eidtproduct/:id",
        name: "product.edit",
        component: () => import("@/views/product/ProductEdit.vue"),
        props: true
    },
    {
        path: "/admin/order",
        name: "order",
        component: OrderManager,
    },
    {
        path: "/admin/order/:id",
        name: "order.edit",
        component: () => import("@/views/order/OrderEdit.vue"),
        props: true

    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    // {
    //     path: "/contacts/:id",
    //     name: "contact.edit",
    //     component: () => import("@/views/ContactEdit.vue"),
    //     props: true // Truyền các biến trong $route.params vào làm props
    // },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;