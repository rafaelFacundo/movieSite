import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

import AuthHomePage from "./screens/AuthHomePage/index";

const App: Component = () => {
  return (
    <main class={styles.App}>
      <AuthHomePage />
    </main>
  );
};

export default App;
