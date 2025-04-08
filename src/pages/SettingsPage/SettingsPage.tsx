import { useEffect } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import useTg from "../../hooks/useTg";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { Button, Typography } from "@telegram-apps/telegram-ui";
import { addToHomeScreen } from "@telegram-apps/sdk-react";

import { Icon28AddCircle } from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";

const SettingsPage = () => {
  const { t } = useTranslation();
  const { platofrm } = useTg();
  useEffect(() => {
    console.log(platofrm);
  }, []);

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={false}>
        <div className="page">
          <div className="flex flex-col justify-center items-center">
            <div className="logo flex items-center gap-2 mb-4">
              <div className="uppercase text-2xl font-semibold text-[var(--tgui--accent_text_color)] text-center">
                {t("settings")}
              </div>
            </div>
            <LanguageSelector />
            {platofrm === "android" || platofrm === "ios" ? (
              <>
                <Typography style={{ fontSize: "12px", marginBottom: "8px" }}>
                  {t("addToHome")}
                </Typography>
                <Button style={{ width: "100%" }} onClick={addToHomeScreen}>
                  {<Icon28AddCircle />}
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default SettingsPage;
