import {
  backButton,
  viewport,
  miniApp,
  initData,
  init as initSDK,
  swipeBehavior,
  settingsButton,
} from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";

export function init(): void {
  initSDK();

  const navigate = useNavigate();

  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error("ERR_NOT_SUPPORTED");
  }

  if (!settingsButton.isSupported() || !miniApp.isSupported()) {
    throw new Error("ERR_NOT_SUPPORTED");
  }

  backButton.mount();
  initData.restore();

  settingsButton.mount();
  settingsButton.show();
  settingsButton.onClick(() => navigate("/settings"));

  void viewport
    .mount()
    .catch((e) => {
      console.error("Something went wrong mounting the viewport", e);
    })
    .then(() => {
      viewport.bindCssVars();
      viewport.expand();

      if (swipeBehavior.mount.isAvailable()) {
        swipeBehavior.mount();
        swipeBehavior.isMounted();
        swipeBehavior.disableVertical();
      }
    });
}
