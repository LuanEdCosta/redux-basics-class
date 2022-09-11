import React, { useState } from "react";

import { User } from "src/types";

import classes from "./Login.module.scss";

interface LoginPageProps {
  handleLogin: (user: User) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ handleLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleValidate = (): boolean => {
    return name.trim() !== "" && email.trim() !== "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidate()) {
      handleLogin({
        name: name.trim(),
        email: email.trim(),
      });
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit} noValidate>
      <input
        className={classes.input}
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className={classes.input}
        type="text"
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className={classes.button} type="submit">
        Login
      </button>
    </form>
  );
};
