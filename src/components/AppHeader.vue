<template>
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
</template>