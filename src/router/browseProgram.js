export default {
  path: "/user/browser",
  name: "BrowseProgram",
  component: () => import("@/Page/Program/ProgramIndex.vue"),
  meta: { title: "Browser" },
  children: [
    {
      path: "",
      name: "ListProgram",
      component: () => import("@/Page/Program/ProgramList.vue"),
      meta: { title: "Program" },
    },
    {
      path: ":id",
      name: "DetailProgram",
      component: () => import("@/Page/Program/ProgramDetail.vue"),
      meta: { title: "Detail Program" },
    },
    {
      path: ":id/notif",
      name: "NotifBrowse",
      component: () => import("@/Page/Program/ProgramRegister.vue"),
      meta: { title: "Program" },
    },
  ],
}
