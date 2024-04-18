<template>
    <div class="container">
        <h3 class="text-center">Thông tin người dùng</h3>
        <div class="col-md-6 mx-auto">
            <ContactForm :contact="contact" @submit:contact="updateContact" />
            <p class="text-center">{{ message }}</p>
        </div>
    </div>
</template>


<script>
import ContactForm from "@/components/user/UserForm.vue";
import AuthService from "@/services/auth.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async getContact(id) {
            try {
                this.contact = await AuthService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateContact(data) {
            try {
                await AuthService.update(this.contact._id, data);
                window.alert("Thông tin đã được thay đổi")
                this.$router.push({ name: "adminpage" });
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getContact(this.id);
        this.message = "";
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 100px;
}
</style>