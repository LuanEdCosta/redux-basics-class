import { StoreState } from "../Store.config";

export const UserSelectors = {
  getUser: (state: StoreState) => state.user.user,
  getIsAuthenticated: (state: StoreState) => !!state.user.user,
};
