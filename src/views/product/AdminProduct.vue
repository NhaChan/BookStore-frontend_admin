<template>
    <div class="page row">
        <div class="col-12">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3">
            <h4 >
                Sản phẩm
                <i class="fas fa-address-book"></i>
            </h4>
            <ProductList v-if="filteredContactsCount > 0" :products="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có liên hệ nào.</p>
            <button type="button"  class="btn btn-outline-success"@click="goToAddProduct" >
                <i class="fas fa-plus"></i> Thêm sản phẩm
            </button>

        </div>
    </div>
</template>

<script>
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "../../components/product/ProductList.vue";
import ProductService from "@/services/product.service";
export default {
    components: {
        InputSearch,
        ProductList,
    },
    data() {
        return {
            Products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        contactStrings() {
            return this.Products.map((product) => {
                const { title, author, genre } = product;
                return [title, author, genre].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.Products;
            return this.Products.filter((_product, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.Products = await ProductService.getAll();
                console.log(await ProductService.getAll());
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        // mounted() {
        //     this.refreshList();
        // },
        goToAddProduct() {
            this.$router.push({ name: "product.add" })
        }
    },
    mounted() {
        this.refreshList();
    },
};

</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>