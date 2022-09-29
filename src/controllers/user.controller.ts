import { createResponse } from "../helpers/response.helper";
import UserService from "../services/user.service";
import { messages } from "../utils/constants";

class UserController {
  /**x
   * User controller method
   */
  static async fetchUser(payload: { id?: number; email?: string }) {
    const user = await UserService.findOne(payload);
    return createResponse(messages.successMessages.SUCCESS, { user });
  }
}

export default UserController;
