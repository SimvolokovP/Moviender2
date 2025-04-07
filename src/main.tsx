import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { setBackgroundAsSecondary } from "./helpers/setBackgroundAsSecondary";
import { init } from "@telegram-apps/sdk-react";

setBackgroundAsSecondary();

init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Moviender2">
      <AppRoot>
        <App />
      </AppRoot>
    </BrowserRouter>
  </StrictMode>
);
