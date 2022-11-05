import EXPRESS, { Express } from "express";
import * as swaggerUI from "swagger-ui-express";
import routes from "./routes";
import { initialiseRoutes } from "./utils/route.util";

import { apiLogger } from "./utils/api-logger";
import { swaggerDocument } from "./utils/swagger";

export async function expressStartup(app: Express) {
	// serving public folder
	app.use("/public", EXPRESS.static("public"));

	app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

	// adding middlewares
	app.use(EXPRESS.json());
	app.use(apiLogger);

	// initializing REST end-points
	initialiseRoutes(app, routes);
}
