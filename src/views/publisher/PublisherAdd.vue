<template>
    <div class="container">
        <h4 class="text-center text-primary fw-bold">Thêm nhà xuất bản mới</h4>
        <div class="col-md-6 mx-auto">
            <ProductForm :product="newProduct" @submit:product="addProduct" />
        </div>
    </div>
</template>

<script>
import ProductForm from "@/components/publisher/PublisherForm.vue"
import ProductService from "@/services/publish.service";
export default {
    components: {
        ProductForm,
    },
    data() {
        return {
            newProduct: {
                name: '',
                address: '',
            },
        };
    },
    methods: {
        async addProduct(data) {
            try {
                await ProductService.create(data);
                window.alert("Sản phẩm đã thêm thành công")
                this.$router.push({ name: "productadmin" });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
