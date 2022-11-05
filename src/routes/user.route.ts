import { IRoute } from "../types/route.interface";

import UserController from "../controllers/user.controller";
import { apiTags, messages } from "../utils/constants";
import { responseCreator } from "../utils/response-creater";

const userRoutes: IRoute[] = [
	{
		path: "/user",
		method: "GET",
		auth: true,
		tags: [apiTags.USER],
		responses: {
			...responseCreator(
				"success",
				messages.successMessages.USER_FETCHED
			),
		},
		description: "Route to fetch user.",
		handler: UserController.fetchUser,
	},
];

export default userRoutes;
