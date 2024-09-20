import { createRouter, createWebHistory } from "vue-router";
import ClassAndStyle from "@/views/ClassAndStyle.vue";
import ConditionalRendering from "@/views/ConditionalRendering.vue";
import EventHandling from "@/views/EventHandling.vue";
import ListRendering from "@/views/ListRendering.vue";
import TemplateSyntax from "@/views/TemplateSyntax.vue";
import TheComputed from "@/views/TheComputed.vue";
import TheLifecylcle from "@/views/TheLifecylcle.vue";
import TheRef from "@/views/TheRef.vue";
import FormVmodel from "@/views/FormVmodel.vue";
import TheWatchers from "@/views/TheWatchers.vue";
import TheComponent from "@/views/TheComponent.vue";
import NotFound from "@/views/NotFound.vue";
import TheUser from "@/views/TheUser.vue";
import PiniaCounter from "@/views/PiniaCounter.vue";
import FetchData from "@/views/FetchData.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/syntax",
      name: "syntax",
      component: TemplateSyntax
    },
    {
      path: "/ref",
      name: "ref",
      component: TheRef
    },
    {
      path: "/computed",
      name: "computed",
      component: TheComputed
    },
    {
      path: "/classAndStyle",
      name: "classAndStyle",
      component: ClassAndStyle
    },
    {
      path: "/conditional",
      name: "conditional",
      component: ConditionalRendering
    },
    {
      path: "/list",
      name: "list",
      component: ListRendering
    },
    {
      path: "/event",
      name: "event",
      component: EventHandling
    },
    {
      path: "/v-model",
      name: "v-model",
      component: FormVmodel
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: TheLifecylcle
    },
    {
      path: "/watchers",
      name: "watchers",
      component: TheWatchers
    },
    {
      path: "/component",
      name: "component",
      component: TheComponent
    },
    {
      path: "/user/:id",
      name: "user",
      component: TheUser
    },
    {
      path: "/pinia",
      name: "pinia",
      component: PiniaCounter
    },
    {
      path: "/fetch",
      name: "fetch",
      component: FetchData
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
  ]
});

export default router;
