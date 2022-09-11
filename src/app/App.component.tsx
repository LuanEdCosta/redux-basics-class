import { useState } from "react";

import { User } from "src/types";
import { LoginPage, HomePage } from "src/pages";

import classes from "./App.module.scss";

export const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Redux Basics</h1>

      {user ? (
        <HomePage user={user} handleLogout={handleLogout} />
      ) : (
        <LoginPage handleLogin={setUser} />
      )}
    </div>
  );
};
