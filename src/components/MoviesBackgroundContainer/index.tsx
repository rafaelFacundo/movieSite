import type { Component } from "solid-js";
import styles from "./Movie.module.css";
import { JSX } from "solid-js";
import { children as resolveChildren } from "solid-js";

/* Props received by the component */
type props = {
  children: JSX.Element;
};

/**
 * This component is a generic div to work as a container for the main
 * content of some screen, of course, when a screen have a movie banner in
 * the background
 *
 * @param props - Contains `children`, the inner content to render.
 * @returns A styled container with the childrens
 * */
const MoviesBackgroundContainer: Component<props> = ({ children }) => {
  const childrenComponents = resolveChildren(() => children);

  return <div class={styles.Container}>{childrenComponents()}</div>;
};

export default MoviesBackgroundContainer;
