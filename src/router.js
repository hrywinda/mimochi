import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage";
import AboutUs from "@/views/AboutUs";
import ContactUs from "@/views/ContactUs";
import ServicePage from "@/views/ServicePage";
import ProductsPage from "@/views/ProductPage";
import GrommingPage from "@/views/ServicePage/gromming.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    path: "/services",
    name: "services",
    component: ServicePage,
    redirect: { name: "service-items" },
    children: [
      {
        path: "/services/items",
        name: "service-items",
        component: GrommingPage,
      },
    ],
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
