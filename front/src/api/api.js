import axios from "axios";
import { apiRoutes } from "routes/routes";

export const getAllBooks = () => axios.get(apiRoutes.getAllBooks);
