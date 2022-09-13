import { User } from "src/types";
import { HomePage, LoginPage } from "src/pages";

interface AppRoutesProps {
  user: User | null;
  handleLogout: () => void;
  handleLogin: (user: User) => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  user,
  handleLogin,
  handleLogout,
}) => {
  if (user) return <HomePage user={user} handleLogout={handleLogout} />;
  return <LoginPage handleLogin={handleLogin} />;
};
