import { IRoute } from "../types/route.interface";

import UserController from "../controllers/user.controller";

const userRoutes: IRoute[] = [
  {
    path: "",
    method: "GET",
    auth: false,
    handler: UserController.fetchUser,
  },
];

export default userRoutes.map((route: IRoute) => {
  route.path = `/user${route.path}`;
  return route;
});
