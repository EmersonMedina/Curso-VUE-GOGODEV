import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { initializeApp } from "firebase/app";
import { Amplify } from 'aws-amplify'; 
import awsExports from './aws-exports'

Amplify.configure(awsExports); 

const firebaseConfig = {
  apiKey: "AIzaSyDNUVSBDg_QDWMsm4tfBbfNMggtFBSbg_c",
  authDomain: "vue3-gogodev.firebaseapp.com",
  projectId: "vue3-gogodev",
  storageBucket: "vue3-gogodev.appspot.com",
  messagingSenderId: "485352158781",
  appId: "1:485352158781:web:26026ad88e55a84180dc54",
  measurementId: "G-V5RFTE6681",
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
