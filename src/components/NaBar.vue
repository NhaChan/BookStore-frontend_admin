<template class="p-3 mb-3 border-bottom" style="height: 100%;">
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
                <router-link :to="{ name: 'admin' }" style="color: rgba(255, 255, 255, .8);">
                    BookStore
                </router-link>
            </div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a class="nav-link" href="">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>
                    <router-link :to="{ name: 'admin' }" style="color: rgba(255, 255, 255, .8);">
                        Trang chủ
                    </router-link>
                </span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Interface
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>
                    <router-link :to="{ name: 'adminpage' }" style="color: rgba(255, 255, 255, .8);">
                        Người dùng
                    </router-link>
                </span>
            </a>
        </li>

        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <router-link :to="{ name: 'productadmin' }" style="color: rgba(255, 255, 255, .8);">
                    Sách
                </router-link>
            </a>
        </li>


        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>
                    <router-link :to="{ name: 'order' }" style="color: rgba(255, 255, 255, .8);">
                        Sách được mượn
                    </router-link>
                </span>
            </a>

        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

    </ul>


</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';
import Cookies from 'js-cookie';

export default {
    data() {
        return {
            userName: '',
            userId: '',
        };
    },
    mounted() {
        this.getUserName();
    },
    methods: {
        getUserName() {
            const name = Cookies.get('userName');
            const id = Cookies.get('userId');
            // console.log("userName:", userName);
            if (name) {
                this.userId = id;
                this.userName = name;
            }
        },
        confirmLogout() {
            if (confirm("Bạn có chắc muốn đăng xuất không?")) {
                this.logout();
            }
        },
        logout() {
            Cookies.remove('userName');
            Cookies.remove('userId');
            this.userName = '';
            this.$router.push({ name: 'login' });
        },
    }
};



</script>