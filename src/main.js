// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import các file CSS
import "./vendor/fontawesome-free/css/all.min.css";
// import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";
import "./css/sb-admin-2.min.css";
import "./vendor/datatables/dataTables.bootstrap4.min.css";


import "./vendor/jquery/jquery.min.js";
import "./vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./vendor/jquery-easing/jquery.easing.min.js";
import "./vendor/datatables/jquery.dataTables.min.js";
import "./vendor/datatables/dataTables.bootstrap4.min.js";
import "./js/sb-admin-2.min.js";
import "./js/demo/datatables-demo.js";


import router from "./router";


createApp(App).use(router).mount("#app");
