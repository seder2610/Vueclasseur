import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import CvView from "../views/CvView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/Cv",
            name: "Cv",
            component: CvView
        }

    ]
})

export default router ;