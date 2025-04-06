import { Route, Routes } from "react-router-dom";
import { appRoutes } from ".";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  return (
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
};

export default AppRouter;
