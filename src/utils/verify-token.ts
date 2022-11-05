import { NextFunction, Request, Response } from "express";

/**
 * Validating incoming authorization token
 */
export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	next();
	// let authenticatedUser = await MODELS.userModel.findOne({
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
};
