export interface IRoute {
  path: string;
  method: string;
  auth: boolean;
  handler: Function;
}
