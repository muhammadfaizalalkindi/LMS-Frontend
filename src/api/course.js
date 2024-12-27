import axios from "@/Service/Api";

export function getCourses({ page } = {}) {
  const params = { page: page ?? 1 };
  return axios.get("courses", { params });
}

export function getMyCourses() {
  return axios.get("courses/me");
}

export function getCourseById(id) {
  return axios.get(`courses/${id}`)
}

export default {
  getCourses,
  getMyCourses,
  getCourseById,
};
