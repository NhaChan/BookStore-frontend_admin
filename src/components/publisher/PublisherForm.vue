<template>
    <Form style="max-width: 600px; margin: 0 auto;" @submit="submitProduct" :validation-schema="ProductFormSchema" class="login-form">
        <div class="form-group mt-4 mb-4">
            <label for="name">Tên nhà xuất bản</label>
            <Field name="name" type="text" class="form-control" v-model="productLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field name="address" type="text" class="form-control" v-model="productLocal.address" />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group mt-4 mb-4">
            <button class="btn btn-primary me-1" type="submit">
                <i class="fas fa-save"></i> Lưu
            </button>
            <!-- <button v-if="productLocal._id" class="btn btn-danger" @click="deleteContact">
                <i class="fas fa-trash"></i> Xóa
            </button> -->
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:product", "delete:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const ProductFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Vui lòng nhập tên.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
        });
        return {
            productLocal: this.product,
            ProductFormSchema,
        };
    },
    methods: {
        submitProduct() {
            this.$emit("submit:product", this.productLocal);
        },
        // deleteContact() {
        //     this.$emit("delete:product", this.productLocal.id);
        // }
    },
};
</script>

<style>
.login-form {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 20px;
}

.form-wrapper {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.error-feedback {
    margin-top: 0.5rem;
}
</style>
