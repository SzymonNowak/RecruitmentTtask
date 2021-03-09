export const routes = {
  home: "/",
  main: "/main",
  cart: "/cart",
  makeOrder: "/makeOrder",
};

const domain = "http://localhost:3001/api";

export const apiRoutes = {
  api: `${domain}`,
  getAllBooks: `${domain}/book`,
  makeOrder: `${domain}/order`,
};
