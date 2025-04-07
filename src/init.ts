import {
  backButton,
  viewport,
  miniApp,
  initData,
  init as initSDK,
  swipeBehavior,
} from "@telegram-apps/sdk-react";

export function init(): void {
  initSDK();

  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error("ERR_NOT_SUPPORTED");
  }

  backButton.mount();
  initData.restore();
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
