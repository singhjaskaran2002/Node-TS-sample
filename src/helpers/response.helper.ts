import { IResponse } from "../types/response.interface";

export const createResponse = (message: string, data?: any): IResponse => {
  return {
    message,
    ...(data && { data }),
  };
};
