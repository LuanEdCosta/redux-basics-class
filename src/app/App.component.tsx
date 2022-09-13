import { useState } from "react";

import { User } from "src/types";
import { AppRoutes } from "src/routes";

import classes from "./App.module.scss";

export const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Redux Basics</h1>

      <AppRoutes
        user={user}
        handleLogin={setUser}
        handleLogout={handleLogout}
      />
    </div>
  );
};
