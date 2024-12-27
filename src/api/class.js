import axios from "@/Service/Api";

export function getAll({ page } = {}) {
  const params = { page: page ?? 1 };
  return axios.get("class", { params });
}

export function getMyClass() {
  return axios.get("class/me");
}

export default {
  getAll,
  getMyClass
}