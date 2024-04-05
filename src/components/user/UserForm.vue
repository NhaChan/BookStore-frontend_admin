<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
        <div class="form-group mt-4 mb-4">
            <Field type="text" class="form-control" name="name"  v-model="contactLocal.name" />
            <ErrorMessage name="name" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="text" class="form-control" name="phone"
                v-model="contactLocal.phone" />
            <ErrorMessage name="phone" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="email" for="email" class="form-control" name="email" id="email"
                v-model="contactLocal.email" />
            <ErrorMessage name="email" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="password" class="form-control" name="password"
                v-model="contactLocal.password"/>
            <ErrorMessage name="password" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="password" class="form-control" name="confirmPassword"
                v-model="contactLocal.confirmPassword"/>
            <ErrorMessage name="confirmPassword" class="error-feedback text-danger" />
        </div>
        
    </Form>

</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Vui lòng nhập tên.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .required("Vui lòng nhập Email.")
                .email("E-mail không hợp lệ."),
            password: yup
            .string()
            .required("Vui lòng nhập mật khẩu."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .required("Vui lòng nhập số điện thoại.")
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        }
    },
}
</script>