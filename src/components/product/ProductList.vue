<template>
    <div class="table-responsive">
        <table class=" table table-bordered ">
            <thead class="table-light">
                <tr class="text-center ">
                    <th scope="coll">Tên tác phẩm</th>
                    <th scope="coll">Tác giả</th>
                    <th scope="coll">Thể loại</th>
                    <th scope="coll">Mô tả</th>
                    <th scope="coll">Hình ảnh</th>
                    <th scope="coll">Số lượng kho</th>
                    <th scope="coll"></th>
                    <th scope="coll"></th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="product._id" :class="{ active: index === activeIndex }"
                    @click="updateActiveIndex(index)">
                    <td>{{ product.title }}</td>
                    <td>{{ product.author }}</td>
                    <td>{{ product.genre }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <img :src="product.imageUrl" alt="hinh anh" style="height: 100px;" />
                    </td>
                    <td>{{ product.quantity }}</td>
                    <td>
                        <div>
                            <router-link :to="{ name: 'product.edit', params: { id: product._id}, }">
                                <button type="button" class="btn btn-outline-success">Sửa</button>
                            </router-link>
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-danger" @click="deleteContact(product._id)">Xóa</button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import productService from '@/services/product.service';
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
        async deleteContact(id){
            await productService.delete(id);
            window.location.reload();
        }
    },
};
</script>