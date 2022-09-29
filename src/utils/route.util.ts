import { Express, Request, Response } from "express";
import { IRoute } from "../types/route.interface";

/**
 * intializing all routes
 */
export function initialiseRoutes(app: any, routes: IRoute[]): void {
  routes.forEach((route: IRoute) => {
    // let middlewares = [];
    // if (route.auth) middlewares.push(verifyToken);
    app.route(route.path)[route.method.toLowerCase()](getHandlerMethod(route));
  });
}

/**
 * Validating incoming authorization token
 */
// async function verifyToken(req, res, next): Promise<any> {
//     let authenticatedUser = await MODELS.userModel.findOne({
//         ...(req.headers.authorization && { where: { accessToken: req.headers.authorization } }),
//         attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
//     });
//     if (req.headers.authorization && authenticatedUser) {
//         req.user = authenticatedUser.toJSON();
//         return next();
//     } else {
//         let responseObject = RESPONSE_HELPERS.createErrorResponse(MESSAGES.UNAUTHORIZED, ERROR_TYPES.UNAUTHORIZED);
//         return res.status(responseObject.statusCode).json(responseObject);
//     }
// }

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
        console.log('err: ', {err});
        if (!err.statusCode && !err.status) {
          err = {
            message: "Internal server error",
          };
        }
        response.status(500).json(err);
      });
  };
}
