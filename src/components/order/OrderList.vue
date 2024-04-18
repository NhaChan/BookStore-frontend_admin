<template>

    <div class="col-lg-12">

        <div class="card position-relative">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Chi tiết mượn sách</h6>
            </div>
            <div class="card-body" v-for="(order) in orders" :key="order._id">
                <div class="mb-3 ">
                    <code>{{ order.ngayMuon }} -> {{ order.ngayTra }}</code>
                </div>
                <div class="small mb-1">{{ order.name }} - {{ order.userId }} </div>
                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                    <h6> Trạng thái:
                        <span :class="{
                            'text-warning': order.status === 'Đang đợi duyệt',
                            'text-info': order.status === 'Đang mượn',
                            'text-primary': order.status === 'Đã trả',
                            'text-danger': order.status === 'Đã hủy' || order.status === 'Quá hạn trả'
                        }">
                            {{ order.status }}
                        </span>
                    </h6>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu dropdown-menu-right animated--grow-in"
                                aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    
                </nav>
                <div class="list-group-item">
                <div class="row">
                    <div class="col-10">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" v-for="(book, bookIndex) in order.books" :key="book.bookId">
                                <strong>{{ 'Sách ' + (bookIndex + 1) }}:</strong>
                                {{ book.title }} - Số lượng: {{ book.quantity }}
                            </li>
                        </ul>
                    </div>

                    <!-- <div class="col-2 d-flex justify-content-end align-items-center">
                        <router-link :to="{ name: 'order.edit', params: { id: order._id }, }">
                            <button class="btn btn-sm btn-success" style="white-space: nowrap;">
                                <i class="fas fa-plus"></i> Hiệu chỉnh
                            </button>
                        </router-link>
                    </div> -->
                </div>
            </div>
                <hr>

            </div>
        </div>

    </div>

    //
    <div>
        <div v-for="(order) in orders" :key="order._id" class="list-group mt-5">
            <div class="d-flex w-100 justify-content-between list-group-item">
                <h6>{{ order.ngayMuon }} -> {{ order.ngayTra }}</h6>
                <h5 class="mb-1">{{ order.name }} - {{ order.userId }}</h5>
                <p class="mb-1">
                <h6> Trạng thái:
                    <span :class="{
                        'text-warning': order.status === 'Mượn',
                        'text-info': order.status === 'Đã trả ',
                        'text-danger': order.status === 'Đã hủy'
                    }">
                        {{ order.status }}
                    </span>
                </h6>
                </p>
            </div>

            <div class="list-group-item">
                <div class="row">
                    <div class="col-10">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" v-for="(book, bookIndex) in order.books" :key="book.bookId">
                                <strong>{{ 'Sách ' + (bookIndex + 1) }}:</strong>
                                {{ book.title }} - Số lượng: {{ book.quantity }}
                            </li>
                        </ul>
                    </div>

                    <!-- <div class="col-2 d-flex justify-content-end align-items-center">
                        <router-link :to="{ name: 'order.edit', params: { id: order._id }, }">
                            <button class="btn btn-sm btn-success" style="white-space: nowrap;">
                                <i class="fas fa-plus"></i> Hiệu chỉnh
                            </button>
                        </router-link>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        orders: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    },

};
</script>
