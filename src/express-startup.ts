import EXPRESS, { NextFunction, Request, Response, Express } from "express";
import routes from "./routes";
import { initialiseRoutes } from "./utils/route.util";

/**
 * middleware for api's logging with deployment mode
 */
function apiLogger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `[${new Date().toDateString()}, ${new Date().toLocaleTimeString()}] '${
      req.url
    }' ${req.method}`
  );
  next();
}

export async function expressStartup(app: Express) {
  // serving public folder
  app.use("/public", EXPRESS.static("public"));

  // adding middlewares
  app.use(EXPRESS.json());
  app.use(apiLogger);

  // initializing REST end-points
  initialiseRoutes(app, routes);
}
