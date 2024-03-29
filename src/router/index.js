import { createWebHistory, createRouter } from "vue-router";
import Register from "@/views/RegisterPage.vue";
import Login from "@/views/LoginPage.vue";
import AdminUser from "@/views/user/AdminUser.vue";


const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/user",
        name: "adminuser",
        component: AdminUser,
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
    // {
    //     path: "/contacts/create",
    //     name: "contact.add",
    //     component: () => import("@/views/ContactAdd.vue"),
    //     props: true
    // }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;