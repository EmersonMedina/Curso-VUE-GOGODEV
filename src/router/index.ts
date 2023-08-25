import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import FirebaseAuthView from "../views/FirebaseAuthView.vue";
import AwsAuthView from "../views/AwsAuthView.vue";
import AzureView from "../views/AzureView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/auth-firebase",
    name: "firebase-auth",
    component: FirebaseAuthView,
  },
   {
    path: "/auth-aws",
    name: "aws-auth",
    component: AwsAuthView,
  },
  {
    path: "/auth-azure",
    name: "azure-auth",
    component: AzureView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
