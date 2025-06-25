export const api_routes = {
  login: "/login",
  user: {
    list: "/user/list",
    read: (id: string) => `/user/read/${id}`,
    delete: (id: string) => `/user/delete/${id}`,
    update: (id: string) => `/user/update/${id}`,
  },
};
