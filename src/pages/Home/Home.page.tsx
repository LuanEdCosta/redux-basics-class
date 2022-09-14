import { useDispatch, useSelector } from "react-redux";

import { UserData } from "src/components";
import { UserActions, UserSelectors } from "src/store/user";

import classes from "./Home.module.scss";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(UserSelectors.getUser);

  const handleLogout = () => {
    dispatch(UserActions.logout());
  };

  return (
    <div className={classes.container}>
      <UserData user={user} />

      <button className={classes.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
