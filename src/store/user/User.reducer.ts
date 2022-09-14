import { AnyAction } from "redux";

import { User } from "src/types";

import { USER_ACTION_TYPES } from "./User.constants";

interface UserStoreState {
  user: User | null;
}

const USER_STORE_INITIAL_STATE: UserStoreState = {
  user: null,
};

export const UserReducer = (
  state = USER_STORE_INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN:
      return { ...state, user: action.payload.user };

    case USER_ACTION_TYPES.LOGOUT:
      return { ...state, user: null };

    default:
      return state;
  }
};
