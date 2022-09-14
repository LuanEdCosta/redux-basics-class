import { Provider } from "react-redux";

import { Store } from "src/store";
import { AppRoutes } from "src/routes";

import classes from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <div className={classes.container}>
        <h1 className={classes.title}>Redux Basics</h1>
        <AppRoutes />
      </div>
    </Provider>
  );
};
