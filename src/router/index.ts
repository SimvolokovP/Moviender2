import { ComponentType } from "react";
import MainPage from "../pages/MainPage/MainPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

export interface IRoute {
  path: string;
  isIndex: boolean;
  component: ComponentType;
}

export const appRoutes: IRoute[] = [
  { path: "/", isIndex: true, component: MainPage },
  { path: "/my", isIndex: false, component: CollectionPage },
  { path: "/movies", isIndex: false, component: MoviesPage },
];
