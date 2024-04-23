<template>
    <div id="content">
        <div class="container-fluid ">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Nhà xuất bản</h6>
                </div>
                <div class="card-body table-responsive">
                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                        <!-- <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search"
                                            class="form-control form-control-sm" placeholder=""
                                            aria-controls="dataTable"></label></div>
                            </div>
                        </div> -->
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table table-bordered dataTable" id="dataTable" width="100%"
                                    cellspacing="0" role="grid" aria-describedby="dataTable_info"
                                    style="width: 100%; max-width: none;">

                                    <thead>
                                        <tr>
                                            <th rowspan="1" colspan="1">Tên nhà xuất bản</th>
                                            <th rowspan="1" colspan="1">Địa chỉ</th>
                                            <th rowspan="1" colspan="1"></th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(product, index) in products" :key="product._id"
                                            :class="{ active: index === activeIndex }"
                                            @click="updateActiveIndex(index)">
                                            <td>{{ product.name }}</td>
                                            <td>{{ product.address }}</td>
                                            
                                            <td>
                                                <div>
                                                    <router-link
                                                        :to="{ name: 'publish.edit', params: { id: product._id }, }">
                                                        <button type="button"
                                                            class="btn btn-outline-success">Sửa</button>
                                                    </router-link>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-danger"
                                                    @click="deleteContact(product._id)">Xóa</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.product-image {
    max-height: 100px;
    width: auto;
}

.description-cell {
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



<script>
import productService from '@/services/publish.service';
export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        async deleteContact(id) {
            await productService.delete(id);
            window.location.reload();
        }
    },
};
</script>