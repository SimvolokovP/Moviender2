import {
  setDebug,
  mountBackButton,
  restoreInitData,
  init as initSDK,
  mountMiniApp,
  bindThemeParamsCssVars,
  mountViewport,
  bindViewportCssVars,
  mockTelegramEnv,
  type ThemeParams,
  themeParamsState,
  retrieveLaunchParams,
  emitEvent,
  expandViewport,
  disableVerticalSwipes,
  swipeBehavior,
  cloudStorage,
  backButton,
  miniApp,
} from "@telegram-apps/sdk-react";

export async function init(options: {
  debug: boolean;
  eruda: boolean;
  mockForMacOS: boolean;
}): Promise<void> {
  setDebug(options.debug);
  initSDK();

  //   options.eruda &&
  //     void import("eruda").then(({ default: eruda }) => {
  //       eruda.init();
  //       eruda.position({ x: window.innerWidth - 50, y: 0 });
  //     });

  if (options.mockForMacOS) {
    let firstThemeSent = false;
    mockTelegramEnv({
      onEvent(event, next) {
        if (event[0] === "web_app_request_theme") {
          let tp: ThemeParams = {};
          if (firstThemeSent) {
            tp = themeParamsState();
          } else {
            firstThemeSent = true;
            tp ||= retrieveLaunchParams().tgWebAppThemeParams;
          }
          return emitEvent("theme_changed", { theme_params: tp });
        }

        if (event[0] === "web_app_request_safe_area") {
          return emitEvent("safe_area_changed", {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          });
        }

        next();
      },
    });
  }

  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error("ERR_NOT_SUPPORTED");
  }

  if (!swipeBehavior.isSupported() || !swipeBehavior.isSupported()) {
    throw new Error("ERR_NOT_SUPPORTED");
  }

  swipeBehavior.mount();

  console.log("cloud storage is " + cloudStorage.isSupported());

  mountBackButton.ifAvailable();
  restoreInitData();
  await Promise.all([
    mountMiniApp.isAvailable() &&
      mountMiniApp().then(() => {
        bindThemeParamsCssVars();
      }),
    mountViewport.isAvailable() &&
      mountViewport().then(() => {
        bindViewportCssVars();
        expandViewport();
        swipeBehavior.isMounted() && disableVerticalSwipes();
      }),
  ]);
}
