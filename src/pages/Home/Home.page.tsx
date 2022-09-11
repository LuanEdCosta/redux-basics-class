import { User } from "src/types";

import classes from "./Home.module.scss";

interface HomePageProps {
  user: User;
  handleLogout: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ user, handleLogout }) => {
  return (
    <div className={classes.container}>
      <div>
        <strong>Name:</strong>
        &nbsp;
        <span>{user.name}</span>
      </div>

      <div>
        <strong>Email:</strong>
        &nbsp;
        <span>{user.email}</span>
      </div>

      <button className={classes.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
