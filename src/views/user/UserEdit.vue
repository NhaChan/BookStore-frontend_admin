<template>
    <div class="container">
        <h4 class="text-center">Hiệu chỉnh Liên hệ</h4>
        <div class="col-md-6 mx-auto">
            <ContactForm :contact="contact" @submit:contact="updateContact" />
            <p class="text-center">{{ message }}</p>
        </div>
    </div>
</template>

<script>
import UserForm from "../../components/user/UserForm.vue";
import UserService from "../../services/auth.service";
export default {
    components: {
        UserForm,
    },
    props: {
        id: { type: String, required: true},
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async getUser(id) {
            try {
                this.contact = await UserService.get(id);
            } catch (error) {
                console.log(error);
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
        async updateUser(data) {
            try {
                await UserService.update(this.contact._id, data);
                window.alert("Thông tin đã được thay đổi")
                this.$router.push({ name: "adminpage" });
            } catch (error) {
                console.log(error);
            }
        },
        async deleteUser() {
            if( confirm("Bạn muốn xóa sản phẩm này?")) {
                try {
                    await UserService.delete(this.contact._id);
                    this.$router.push({name: "adminpage" })
                } catch (error) {
                console.log(error);
            }
        }
    },
}
}

</script>