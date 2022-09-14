import { User } from "src/types";

import { USER_ACTION_TYPES } from "./User.constants";

export const UserActions = {
  login: (user: User) => ({
    type: USER_ACTION_TYPES.LOGIN,
    payload: {
      user,
    },
  }),

  logout: () => ({
    type: USER_ACTION_TYPES.LOGOUT,
  }),
};
