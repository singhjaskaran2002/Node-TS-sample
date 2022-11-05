import { Request, Response } from "express";
import { IRoute } from "../types/route.interface";
import { verifyToken } from "./verify-token";

import { writeFile } from "fs";

/**
 * intializing all routes
 */
export const initialiseRoutes = (app: any, routes: IRoute[]): void => {
	routes.forEach((route: IRoute) => {
		let middlewares = [];
		if (route.auth) middlewares.push(verifyToken);
		serveSwaggerPaths(route);
		app.route(route.path)[route.method.toLowerCase()](
			getHandlerMethod(route)
		);
	});
};

export const serveSwaggerPaths = (route: IRoute) => {
	let paths: any = {};
	const path = `
	{
		"${route.path}": {
			"${route.method.toLowerCase()}": {
				"tags": ${JSON.stringify(route.tags)},
				"description": "${route.description}",
				"responses": ${JSON.stringify({})}
			}
		}
	}
	`;

	paths = {
		...JSON.parse(path),
	};
	writeFile(
		__dirname + "/../../public/swagger.path.json",
		JSON.stringify(paths),
		(err) => {
			err && console.log("Error in writing json file: ", err);
		}
	);
};

/**
 * get handler for a route method
 */
function getHandlerMethod(route: IRoute): Function {
	let handler = route.handler;
	return (request: Request, response: Response) => {
		let payload = {
			...(request.body && request.body),
			...(request.query && request.query),
			...(request.params && request.params),
		};
		handler(payload)
			.then((result: any) => {
				response.status(200).json(result);
			})
			.catch((err: any) => {
				console.log("err: ", { err });
				if (!err.statusCode && !err.status) {
					err = {
						message: "Internal server error",
					};
				}
				response.status(500).json(err);
			});
	};
}
