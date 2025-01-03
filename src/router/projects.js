export default function (role) {

  let path = '/user/projects'
  if(role.toLowerCase() === 'instructor') {
    path = '/instructor/projects'
  }

  return {
    path: path,
    name: `${role}Project`,
    component: () => import("@/Page/Project/ProjectIndex.vue"),
    meta: { title: "Project" },
    children: [
      {
        path: "",
        name: `${role}ListProject`,
        component: () => import("@/Page/Project/ProjectList.vue"),
        meta: { title: "Project" },
      },
    ],
  };
}
