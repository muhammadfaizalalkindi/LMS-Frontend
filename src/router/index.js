import { createRouter, createWebHistory } from "vue-router";
import ClassUtama from "@/Page/ClassUtama.vue";
import DashboardMain from "@/components/Dashboard/DashboardMain.vue";
import DashboardInstructor from "@/components/Dashboard/DashboardInstructor.vue";
import MyClass from "@/Page/MyClass.vue";
import HomePage from "@/Page/HomePage.vue";
import SettingPage from "@/Page/SettingPage.vue";
import LoginPage from "@/Page/Auth/LoginPage.vue";
import RegistrasiPage from "@/Page/Auth/RegistrasiPage.vue";
import VerifikasiCard from "@/Page/Auth/VerifikasiCard.vue";
// import InstructorPage from '@/Page/InstructorPage.vue'; // Halaman khusus untuk instruktur
import DashboardCard from "@/components/Dashboard/DashboardCard.vue";
import CoursePage from "@/components/Section/Deskripsi/CoursePage.vue";
import MateriCard from "@/components/Section/Deskripsi/MateriCard.vue";
import FileDoc from "@/components/Section/Deskripsi/FileDoc.vue";
import KuisCard from "@/components/Section/Deskripsi/KuisCard.vue";
import BuatProgram from "@/Page/BuatProgram.vue";
import TesCard from "@/components/Section/Deskripsi/TesCard.vue";
// import BrowseProgram from "@/Page/BrowseProgram.vue";
import MyProgram from "@/components/Section/MyProgram/MyProgram.vue";
// import DeskripsiBrowse from "@/components/Section/Browse/DeskripsiBrowse.vue";
// import NotifBrowse from "@/components/Section/Browse/NotifBrowse.vue";
import ProgramPermintaan from "@/Page/ProgramPermintaan.vue";
import CreateCourse from "@/Page/BuatCourse.vue";
import CurriculumCourse from "@/components/Section/BuatCourse/CurriculumCourse.vue";
import InfoCourse from "@/components/Section/BuatCourse/InfoCourse.vue";
import SelesaiProgram from "@/components/Section/BuatCourse/SelesaiProgram.vue";
import InfoProg from "@/components/Section/BuatProgram/InfoProg.vue";
import ProgramDosen from "@/Page/ProgramDosen";
import CardDosen from "@/components/Section/ProgramDosen/ProgramDosen.vue";
import DeskripsiDosen from "@/components/Section/ProgramDosen/DeskripsiDosen.vue";
import DetailPage from "@/components/Section/ProgramDosen/DetailPage.vue";
import DetailPertemuan from "@/components/Section/ProgramDosen/DetailPertemuan.vue";
import browseProgram from "./browseProgram";
import myProgram from "./myProgram";
import projects from "./projects";

const routes = [
  { path: "/", name: "ClassUtama", component: ClassUtama },

  // students
  {
    path: "/user/dashboard",
    component: DashboardMain,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "DashboardStudent",
        component: HomePage,
        meta: { title: "Dashboard" },
      },
      browseProgram,
      myProgram,
      projects('user'),
      {
        path: "/user/myclass",
        name: "MyClass",
        component: MyClass,
        meta: { title: "My Program" },
      },
      {
        path: "/myclass/:programId",
        name: "MyProgram",
        component: MyProgram,
        props: true,
        meta: { title: "My Program" },
        children: [
          {
            path: "course/:courseId",
            name: "CoursePage",
            component: CoursePage,
            props: true,
            meta: { title: "Course Page" },
          },
        ],
      },
      {
        path: "/user/setting",
        name: "SettingPage",
        component: SettingPage,
        meta: { title: "Setting" },
      },
    ],
  },

  //instructor & admin
  {
    path: "/instructor/dashboard",
    component: DashboardInstructor,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "DashboardInstructor",
        component: HomePage,
        meta: { title: "Dashboard" },
      },
      projects('instructor'),
      {
        path: "/instructor/program",
        name: "BuatProgram",
        component: BuatProgram,
        meta: { title: "Program" },
      },
      {
        path: "/instructor/setting",
        name: "SettingPageInstructor",
        component: SettingPage,
        meta: { title: "Setting" },
      },
      {
        path: "/instructor/programdosen",
        name: "ProgramDosen",
        component: ProgramDosen,
        props: true,
        meta: { title: "My Program" },
      },
      {
        path: "/instructor/programdosen/:programId",
        name: "CardDosen",
        component: CardDosen,
        props: true,
        meta: { title: "My Program" },
      },
      {
        path: "/instructor/programdosen/:programId/deskripsi",
        name: "DeskripsiDosen",
        component: DeskripsiDosen,
        props: true,
        meta: { title: "My Program" },
      },
      {
        path: "/instructor/programdosen/:programId/detail/:name",
        name: "DetailPage",
        component: DetailPage,
        meta: { title: "My Program" },
      },
      {
        path: "/instructor/programdosen/:programId/kehadiran/:name",
        name: "DetailPertemuan",
        component: DetailPertemuan,
        meta: { title: "My Program" },
      },
      {
        path: "/instructor/permintaan",
        name: "ProgramPermintaan",
        component: ProgramPermintaan,
        meta: { title: "Permintaan" },
      },
      {
        path: "/instructor/createcourse",
        name: "CreateCourse",
        component: CreateCourse,
        meta: { title: "Course" },
        props: (route) => ({ courseTitle: route.query.courseTitle }),
      },
      {
        path: "/instructor/createcourse/information",
        name: "InfoCourse",
        component: InfoCourse,
        meta: { title: "Course" },
      },
      {
        path: "/instructor/createcourse/curriculum",
        name: "CurriculumCourse",
        component: CurriculumCourse,
        meta: { title: "Course" },
      },
      {
        path: "/instructor/createcourse/selesai",
        name: "SelesaiProgram",
        component: SelesaiProgram,
        meta: { title: "Course" },
      },
      {
        path: "/instructor/program/info",
        name: "InfoProg",
        component: InfoProg,
        meta: { title: "Program" },
      },
      {
        path: "/myclass/course/:id",
        component: DashboardCard,
        props: true,
        children: [
          {
            path: "",
            name: "CoursePage",
            component: CoursePage,
            meta: { title: "Preview" },
          },
          {
            path: "materi",
            name: "MateriCard",
            component: MateriCard,
            meta: { title: "Video Pembelajaran" },
          },
          {
            path: "doc",
            name: "FileDoc",
            component: FileDoc,
            meta: { title: "Materi Pembelajaran" },
          },
          {
            path: "kuis",
            name: "KuisCard",
            component: KuisCard,
            meta: { title: "Kuis" },
          },
          {
            path: "tes",
            name: "TesCard",
            component: TesCard,
            meta: { title: "Tes" },
          },
        ],
      },
    ],
  },

  {
    path: "/myclass/course/:id",
    component: DashboardCard,
    props: true,
    children: [
      {
        path: "",
        name: "CoursePage",
        component: CoursePage,
        meta: { title: "Preview" },
      },
      {
        path: "materi",
        name: "MateriCard",
        component: MateriCard,
        meta: { title: "Video Pembelajaran" },
      },
      {
        path: "doc",
        name: "FileDoc",
        component: FileDoc,
        meta: { title: "Materi Pembelajaran" },
      },
      {
        path: "kuis",
        name: "KuisCard",
        component: KuisCard,
        meta: { title: "Kuis" },
      },
      {
        path: "tes",
        name: "TesCard",
        component: TesCard,
        meta: { title: "Tes" },
      },
    ],
  },

  // Registrasi
  { name: "LoginPage", path: "/login", component: LoginPage },
  { name: "RegistrasiPage", path: "/registrasi", component: RegistrasiPage },
  {
    name: "VerifikasiCard",
    path: "/verifikasi",
    component: VerifikasiCard,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;
