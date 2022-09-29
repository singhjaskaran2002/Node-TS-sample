import { IUser } from "../types/user.interface";

const users: IUser[] = [
  {
    id: 1,
    name: "Jaskaran Singh",
    email: "jaskaran@yopmail.com",
  },
];

class UserService {
  /**
   * Find one entry matching the condition
   * @returns user object
   */
  static async findOne(condition: {
    id?: number;
    email?: string;
  }): Promise<IUser> {
    const user = users.find((item) => item.id === +condition.id);
    return user;
  }
}

export default UserService;
