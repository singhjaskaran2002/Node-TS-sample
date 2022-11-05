import { apiTags } from "./constants";

import { readFileSync } from "fs";

let paths = readFileSync(__dirname + "/../../public/swagger.path.json");

export const swaggerDocument = {
	openapi: "3.0.1",
	info: {
		version: "1.0.0",
		title: "APIs Document",
		description: "your description here",
		termsOfService: "",
		contact: {
			name: "Jaskaran Singh",
			email: "singhjaskaran975@gmail.com",
		},
		license: {},
	},
	servers: [
		{
			url: "http://localhost:9000",
			description: "Local server",
		},
	],
	components: {
		schemas: {},
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				name: "Authorization",
				in: "header",
				bearerFormat: "JWT",
			},
		},
	},
	tags: [
		{
			name: apiTags.USER,
		},
	],
	paths: JSON.parse(paths.toString()),
};
