<template>
    <Form @submit="submitRegister" :validation-schema="contactFormSchema">
        <div class="form-group mt-4 mb-4">
            <Field type="text" class="form-control" name="name" placeholder="Nhập họ tên của bạn" v-model="registerData.name" />
            <ErrorMessage name="name" class="error-feedback text-danger" />
        </div>
        <!-- <div class="form-group mt-4 mb-4">
            <Field type="text" for="address" class="form-control" name="address" id="address"
                placeholder="Nhập vào địa chỉ của bạn" v-model="registerData.adrres"/>
            <ErrorMessage name="address" class="error-feedback text-danger" />
        </div> -->
        <div class="form-group mt-4 mb-4">
            <Field type="text" class="form-control" name="phone"
                placeholder="Nhập vào số diện thoại của bạn" v-model="registerData.phone" />
            <ErrorMessage name="phone" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="email" for="email" class="form-control" name="email" id="email"
                placeholder="Nhập vào Email của bạn" v-model="registerData.email" />
            <ErrorMessage name="email" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="password" class="form-control" name="password"
                placeholder="Nhập vào mật khẩu của bạn" v-model="registerData.password"/>
            <ErrorMessage name="password" class="error-feedback text-danger" />
        </div>
        <div class="form-group mt-4 mb-4">
            <Field type="password" class="form-control" name="confirmPassword"
                placeholder="Nhập lại mật khẩu của bạn" v-model="registerData.confirmPassword"/>
            <ErrorMessage name="confirmPassword" class="error-feedback text-danger" />
        </div>
        <div>
            <p class="text-center" style="font-size: 0.8rem;">Bằng việc đăng kí, bạn đồng ý với quy định về
                <a href="" class="text-danger text-decoration-none">Điều khoản dịch vụ </a>&
                <a href="" class="text-danger text-decoration-none">Chính sách bảo mật</a>
            </p>
        </div>
        <!-- <div class="row mb-3">
            <div class="col-md-4 col-sm-4 col-12"></div>
            <div class="col-md-4 col-sm-4 col-12">
                <a href="index.php" class="text-decoration-none d-flex justify-content-end">
                    <button type="button" class="btn btn-light form-control btn-fb">TRỞ LẠI</button></a>
            </div>
            <div class="col-md-4 col-sm-4 col-12">
                <a href="#" class="text-decoration-none d-flex justify-content-end">
                    <button type="submit" class="btn btn-danger form-control btn-fb">ĐĂNG KÝ</button>
                </a>
            </div>
        </div> -->
    </form>

</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            registerData: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
            },
            registerFormSchema: yup.object().shape({
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
        }),
        }
    },
    methods: {
        submitRegister() {
            this.$emit("submit:register", this.registerData);
        }
    },
}
</script>