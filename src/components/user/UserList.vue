<template>
    <div id="content">
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Độc giả</h6>
                </div>
                <div class="card-body table-responsive">
                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                        <!-- <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search"
                                            class="form-control form-control-sm" placeholder=""
                                            aria-controls="dataTable"></label></div>
                            </div>
                        </div> -->
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table table-bordered dataTable" id="dataTable" width="100%"
                                    cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                                    <thead>
                                        <tr>
                                            <th rowspan="1" colspan="1">Tên người dùng</th>
                                            <th rowspan="1" colspan="1">Email</th>
                                            <th rowspan="1" colspan="1">Địa chỉ</th>
                                            <th rowspan="1" colspan="1">Số điện thoại</th>
                                            <th rowspan="1" colspan="1"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(contact, index) in filteredContacts" :key="contact._id"
                                            :class="{ active: index === activeIndex }"
                                            @click="updateActiveIndex(index)">
                                            <td>{{ contact.name }}</td>
                                            <td>{{ contact.email }}</td>
                                            <td>{{ contact.address }}</td>
                                            <td>{{ contact.phone }}</td>
                                            <td>
                                                <div>
                                                    <router-link
                                                        :to="{ name: 'contact.edit', params: { id: contact._id }, }">
                                                        <button type="button"
                                                            class="btn btn-outline-success">Sửa</button>
                                                    </router-link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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