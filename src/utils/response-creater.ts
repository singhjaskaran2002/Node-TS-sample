import { IApiResponse } from "../types/api-response.interface";

export const responseCreator = (
	type: "success" | "forbidden" | "unauthorized" | "bad_request" = "success",
	description: string
): IApiResponse => {
	switch (type) {
		case "success":
			return { "200": { description } };
		case "forbidden":
			return { "403": { description } };
		case "unauthorized":
			return { "401": { description } };
		case "bad_request":
			return { "400": { description } };
	}
};
