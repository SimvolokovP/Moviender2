import { Route, Routes } from "react-router-dom";
import { appRoutes } from ".";

const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          index={route.isIndex}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
