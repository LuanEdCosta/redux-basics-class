import { useSelector } from "react-redux";
import { UserSelectors } from "src/store/user";

import { HomePage, LoginPage } from "src/pages";

export const AppRoutes: React.FC = () => {
  const isAuthenticated = useSelector(UserSelectors.getIsAuthenticated);

  if (isAuthenticated) return <HomePage />;
  return <LoginPage />;
};
