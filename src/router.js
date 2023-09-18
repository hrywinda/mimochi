import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage";
import AboutUs from "@/views/AboutUs";
import ContactUs from "@/views/ContactUs";
import ServicePage from "@/views/ServicePage";
import ProductsPage from "@/views/ProductPage";
import GrommingPage from "@/views/ServicePage/Gromming";
import AdoptPage from "@/views/ServicePage/Adopt";
import PetHotel from "@/views/ServicePage/PetHotel";
import VetenaryPage from "@/views/ServicePage/Vetenary";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      top: true,
    },
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
    meta: {
      top: true,
    },
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
    meta: {
      top: true,
    },
  },
  {
    path: "/services",
    name: "services",
    component: ServicePage,
    redirect: { name: "gromming" },
    children: [
      {
        path: "/services/gromming",
        name: "gromming",
        component: GrommingPage,
      },
      {
        path: "/services/adopt",
        name: "adopt",
        component: AdoptPage,
      },
      {
        path: "/services/pethotel",
        name: "pethotel",
        component: PetHotel,
      },
      {
        path: "/services/vetenary",
        name: "vetenary",
        component: VetenaryPage,
      },
    ],
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage,
    meta: {
      top: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.top) {
      return { top: 0 };
    } else {
      return savedPosition;
    }
  },
});

export default router;
