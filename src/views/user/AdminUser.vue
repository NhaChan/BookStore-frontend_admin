<template>
    <div class="page row">
        <div class="col-sm-12 col-md-8 d-flex justify-content-start mx-4">
                <div id="dataTable_filter" class="dataTables_filter">
                    <InputSearch v-model="searchText" />
                </div>
            </div>
        <div class="mt-3">
            <UserList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có liên hệ nào.</p>
        </div>
    </div>
</template>

<script>
import InputSearch from "@/components/InputSearch.vue";
import UserList from "@/components/user/UserList.vue";
import AuthService from "@/services/auth.service";

export default {
    components: {
        InputSearch,
        UserList,
    },
    data() {
        return {
            contacts: [],
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
            return this.contacts.map((contact) => {
                const { name, email, address, phone } = contact;
                return [name, email, address, phone].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.contacts;
            return this.contacts.filter((_contact, index) =>
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
                this.contacts = await AuthService.getAll();
                console.log(await AuthService.getAll());
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        mounted() {
            this.refreshList();
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