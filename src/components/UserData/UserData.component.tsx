import { User } from "src/types";

import classes from "./UserData.module.scss";

interface UserDataProps {
  user: User;
}

export const UserData: React.FC<UserDataProps> = ({ user }) => {
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
    </div>
  );
};
