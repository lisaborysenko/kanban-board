import { RouteObject } from "react-router-dom";
import Layout from "../layout";
import Boards from "../pages/Boards";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ children: [{ path: "", element: <Boards /> }] }],
  },
];

export default routes;
