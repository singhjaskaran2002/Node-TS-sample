import { IApiResponse } from "./api-response.interface";

export interface IRoute {
	path: string;
	method: string;
	auth: boolean;
	responses: IApiResponse
	handler: Function;
	tags?: Array<string>;
	description?: string;
}
