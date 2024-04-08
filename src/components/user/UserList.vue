<template>
    <div class="table-responsive">
        <table class=" table table-bordered ">
            <thead class="table-success">
                <tr>
                    <th scope="coll">Tên người dùng</th>
                    <th scope="coll">Email</th>
                    <th scope="coll">Địa chỉ</th>
                    <th scope="coll">Số điện thoại</th>
                    <th scope="coll"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact, index) in filteredContacts" :key="contact._id" :class="{ active: index === activeIndex }"
                    @click="updateActiveIndex(index)">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.address }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>
                        <div>
                            <router-link :to="{ name: 'contact.edit', params: { id: contact._id}, }">
                                <button type="button" class="btn btn-outline-success">Sửa</button>
                            </router-link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import UserService from '@/services/auth.service';

export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => contact.role === false);
        }
    }
};
</script>