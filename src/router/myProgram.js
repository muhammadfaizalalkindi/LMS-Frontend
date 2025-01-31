export default {
  path: "/user/my-program",
  name: "MyProgramIndex",
  component: () => import("@/Page/MyProgram/ProgramIndex.vue"),
  meta: { title: "My program" },
  children: [
    {
      path: "",
      name: "MyListProgram",
      component: () => import("@/Page/MyProgram/ProgramList.vue"),
      meta: { title: "Program" },
    },
    {
      path: ":id",
      name: "MyDetailProgram",
      component: () => import("@/Page/MyProgram/ProgramDetail.vue"),
      meta: { title: "Detail Program" },
    },
  ],
}
