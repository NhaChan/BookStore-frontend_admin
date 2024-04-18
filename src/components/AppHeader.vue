<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <!-- Sidebar Toggle (Topbar) -->
            <form class="form-inline">
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>
            </form>

            <!-- Topbar Search -->
            <!-- <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form> -->

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">

                <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                <li class="nav-item dropdown no-arrow d-sm-none">
                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-search fa-fw"></i>
                    </a>
                    <!-- Dropdown - Messages -->
                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form class="form-inline mr-auto w-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>
                
                <!-- Nav Item - User Information -->
                <li class="nav-item mx-5" v-if="userName" >
                <router-link to="#" class="nav-link" @click="confirmLogout">
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="text-dark"> {{ userName }}</span>
                </router-link>
            </li>

            </ul>

        </nav>
    </div>
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
        this.loadAdditionalScripts();
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
        loadAdditionalScripts() {
            const scripts = [
                "vendor/jquery/jquery.min.js",
                "vendor/bootstrap/js/bootstrap.bundle.min.js",
                "vendor/jquery-easing/jquery.easing.min.js",
                "js/sb-admin-2.min.js",
                "vendor/chart.js/Chart.min.js",
                "js/demo/chart-area-demo.js",
                "js/demo/chart-pie-demo.js"
            ];

            scripts.forEach(script => {
                const scriptElement = document.createElement('script');
                scriptElement.src = script;
                document.head.appendChild(scriptElement);
            });
        }
    }
};



</script>

<style>
@import url('../vendor/fontawesome-free/css/all.min.css');

/* Google Fonts CSS */
@import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');

/* Custom styles for SB Admin 2 */
@import url('../css/sb-admin-2.min.css');
</style>