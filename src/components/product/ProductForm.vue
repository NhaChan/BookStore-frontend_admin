<template>
    <Form style="max-width: 600px; margin: 0 auto;" @submit="submitProduct" :validation-schema="ProductFormSchema"
        class="login-form">
        <div class="form-group mt-4 mb-4">
            <label for="title">Tiêu đề</label>
            <Field name="title" type="text" class="form-control" v-model="productLocal.title" />
            <ErrorMessage name="title" class="error-feedback" />
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="author">Tác giả</label>
            <Field name="author" type="text" class="form-control" v-model="productLocal.author" />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="publisher">Nhà xuất bản</label>
            <select v-model="productLocal.publisher" class="form-control">
                <option value="">
                    Chọn nhà xuất bản
                </option>
                <option v-for="publisher in Publishers" :key="publisher._id" :value="publisher.name">{{ publisher.name }}</option>
            </select>
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="genre">Thể loại</label>
            <Field name="genre" type="text" class="form-control" v-model="productLocal.genre" />
            <ErrorMessage name="genre" class="error-feedback" />
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="description">Mô tả</label>
            <Field name="description" type="textarea" class="form-control" v-model="productLocal.description" />
            <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="imageUrl">Hình ảnh (URL)</label>
            <Field name="imageUrl" type="text" class="form-control" v-model="productLocal.imageUrl" />
            <ErrorMessage name="imageUrl" class="error-feedback" />
        </div>
        <div class="form-group mt-4 mb-4">
            <label for="quantity">Số lượng</label>
            <Field name="quantity" type="tel" class="form-control" v-model="productLocal.quantity" />
            <ErrorMessage name="quantity" class="error-feedback" />
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
import PublishService from "@/services/publish.service";
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
            title: yup
                .string()
                .required("Tiêu đề phải có giá trị.")
                .min(2, "Tiêu đề phải ít nhất 2 ký tự.")
                .max(50, "Tiêu đề có nhiều nhất 50 ký tự."),
            author: yup
                .string()
                .required("Tác giả phải có giá trị.")
                .max(50, "Tác giả có nhiều nhất 50 ký tự."),
            publisher: yup
                .string(),
            genre: yup
                .string()
                .required("Thể loại phải có giá trị.")
                .max(50, "Thể loại có nhiều nhất 50 ký tự."),
            imageUrl: yup.string().url("Hình ảnh không hợp lệ."),
            quantity: yup
                .number()
                .required("Số lượng phải có giá trị.")
                .positive("Số lượng phải lớn hơn 0.")
                .integer("Số lượng phải là số nguyên.")
        });
        return {
            productLocal: this.product,
            ProductFormSchema,
            Publishers: [],
        };
    },
    methods: {
        submitProduct() {
            this.$emit("submit:product", this.productLocal);
        },
        async getPublish() {
            this.Publishers = await PublishService.getAll();
            console.log('object', this.Publishers)
        }
    },
    mounted() {
        this.getPublish();
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
