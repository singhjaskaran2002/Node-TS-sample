import { NextFunction, Request, Response } from "express";

/**
 * middleware for api's logging with deployment mode
 */
export function apiLogger(req: Request, res: Response, next: NextFunction) {
	console.log(
		`[${new Date().toDateString()}, ${new Date().toLocaleTimeString()}] '${
			req.url
		}' ${req.method}`
	);
	next();
}
