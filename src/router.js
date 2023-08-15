import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/HomePage'


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/about-us",
  //   name: "about-us",
  //   component: AboutUs,
  // },
  // {
  //   path: "/contact-us",
  //   name: "contact-us",
  //   component: ContactUs,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})


export default router
