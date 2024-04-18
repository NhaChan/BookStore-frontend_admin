<template>
    <div class="container">
        <div class="col-sm-12 col-md-8 d-flex justify-content-start mx-1">
            <div id="dataTable_filter" class="dataTables_filter">
                <InputSearch v-model="searchText" />
            </div>
        </div>
        <div class="mt-3">
            <!-- <h4 class="mb-4">
                <i class="fas fa-clipboard mr-2"></i> Đơn mượn sách
            </h4> -->
            <OrderList v-if="filteredOrdersCount > 0" :orders="filteredOrders" v-model:activeIndex="activeIndex" />
            <p v-else class="text-muted" style="min-width: 750px;">Không có đơn mượn nào.</p>
        </div>
    </div>
</template>


<script>
import InputSearch from '@/components/InputSearch.vue';
import OrderService from '@/services/order.service';
import OrderList from '@/components/order/OrderList.vue';

export default {
    components: {
        InputSearch,
        OrderList,
    },
    data() {
        return {
            orders: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        orderStrings() {
            return this.orders.map((order) => {
                const { name, status } = order;
                return [name, status].join("");
            });
        },
        filteredOrders() {
            if (!this.searchText) return this.orders;
            return this.orders.filter((_order, index) =>
                this.orderStrings[index].includes(this.searchText)
            );
        },
        activeOrder() {
            if (this.activeIndex < 0) return null;
            return this.filteredOrders[this.activeIndex];
        },
        filteredOrdersCount() {
            return this.filteredOrders.length;
        },
    },
    methods: {
        async retrieveOrders() {
            try {
                this.orders = await OrderService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveOrders();
            this.activeIndex = -1;
        }
    },
    mounted() {
        this.refreshList();
    },

};
</script>
