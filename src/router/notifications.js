export default function (role) {

  let path = '/user/notifications'
  if(role.toLowerCase() === 'instructor') {
    path = '/instructor/notifications'
  }

  return {
    path: path,
    name: `${role}Notification`,
    component: () => import("@/Page/Notification/Index.vue"),
    meta: { title: "Notification" },
    children: [
      {
        path: "",
        name: `${role}ListNotification`,
        component: () => import("@/Page/Notification/List.vue"),
        meta: { title: "Notification" },
      },
    ],
  };
}
