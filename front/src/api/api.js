import axios from "axios";
import { apiRoutes } from "routes/routes";

export const getAllBooks = () => axios.get(apiRoutes.getAllBooks);
export const makeOrder = (order) => axios.post(apiRoutes.makeOrder, order);
