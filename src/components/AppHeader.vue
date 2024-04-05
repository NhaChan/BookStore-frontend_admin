<!-- <template>
    <nav class="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-evenly">
        <a href="/" class="navbar-brand">Quản lý sách</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'adminpage' }" class="nav-link">
                    Người dùng
                    <i class="fas fa-book"></i>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'productadmin' }" class="nav-link">
                    Sản phẩm
                    <i class="fas fa-book"></i>
                </router-link>
            </li>
            
        </div>
    </nav>
</template> -->

<template>
        <nav class="navbar navbar-dark bg-dark fixed-top ">
            <div class="container p-3">
                <a class="navbar-brand" href="/admin">Quản lý sách</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Quản lý</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <router-link :to="{ name: 'adminpage' }" class="nav-link">
                                        Người dùng
                                        <i class="fas fa-book"></i>
                                    </router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <router-link :to="{ name: 'productadmin' }" class="nav-link">
                                        Sản phẩm
                                        <i class="fas fa-book"></i>
                                    </router-link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';

</script>