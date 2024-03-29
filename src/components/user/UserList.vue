<template>
    <div class="table-responsive">
        <table class=" table table-bordered ">
            <thead class="table-light">
                <tr>
                    <th scope="coll">Name</th>
                    <th scope="coll">Email</th>
                    <th scope="coll">Address</th>
                    <th scope="coll">Phone</th>
                    <th scope="coll">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact, index) in contacts" :key="contact._id" :class="{ active: index === activeIndex }"
                    @click="updateActiveIndex(index)">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.address }}</td>
                    <td>{{ contact.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => contact.role === false);
        }
    }
};
</script>