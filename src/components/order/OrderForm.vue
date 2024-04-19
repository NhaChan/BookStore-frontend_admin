<template>
    <Form @submit="submitOrder" :validation-schema="orderFormSchema" class="my-form">
        <div class="form-group">
            <label for="status">Tình trạng</label>
            <select v-model="orderLocal.status" class="form-control">
                <option disabled value="">Chọn tình trạng</option>
                <option v-for="option in statusOptions" :value="option.value" :key="option.value">{{ option.text }}
                </option>
            </select>
        </div>
        <div class="form-group">
            <button class="btn btn-primary me-1" type="submit" @click="submitOrder">
                <i class="fas fa-save"></i> Lưu
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        ErrorMessage,
    },
    emits: ["submit:order", "delete:order"],
    props: {
        order: { type: Object, required: true }
    },
    data() {
        const orderFormSchema = yup.object().shape({
            status: yup
                .string()
                .required('Trạng thái được yêu cầu'),
        });

        return {
            orderLocal: this.order,
            orderFormSchema,
            statusOptions: [
                { value: 'Mượn', text: 'Đang mượn' },
                { value: 'Đã trả', text: 'Đã trả' },
                { value: 'Đã hủy', text: 'Đã hủy' }
            ],
        };
    },
    methods: {
        submitOrder() {
            console.log(this.orderLocal);
            this.$emit("submit:order", this.orderLocal);
        }
    },
};
</script>

<style scoped>
.my-form .form-group {
    margin-bottom: 20px;
}
</style>
