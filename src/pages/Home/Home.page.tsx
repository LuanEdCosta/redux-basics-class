import { UserData } from "src/components";
import { User } from "src/types";

import classes from "./Home.module.scss";

interface HomePageProps {
  user: User;
  handleLogout: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ user, handleLogout }) => {
  return (
    <div className={classes.container}>
      <UserData user={user} />

      <button className={classes.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
