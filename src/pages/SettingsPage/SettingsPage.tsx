import { useEffect } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import useTg from "../../hooks/useTg";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { Button } from "@telegram-apps/telegram-ui";
import { addToHomeScreen } from "@telegram-apps/sdk-react";

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
          <div className="logo flex items-center gap-2 mb-4">
            <div className="uppercase text-2xl font-semibold text-[var(--tgui--accent_text_color)]">
              {t("settings")}
            </div>
          </div>
          <LanguageSelector />
          {platofrm === "android" || platofrm === "ios" ? (
            <Button onClick={addToHomeScreen}>{t("addToHome")}</Button>
          ) : (
            <></>
          )}
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default SettingsPage;
