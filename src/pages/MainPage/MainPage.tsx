import { Button } from "@telegram-apps/telegram-ui";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../../anim2.json";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import useTg from "../../hooks/useTg";
import { getUsername } from "../../helpers/getUsername";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Icon28Archive } from "@telegram-apps/telegram-ui/dist/icons/28/archive";
import { Icon28AddCircle } from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";

const MainPage = () => {
  const { user } = useTg();

  const { t } = useTranslation();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <TelegramNavigation isMainPage={true}>
      <AnimatedPage>
        <div className="page">
          {user && (
            <div className="text-[var(--tgui--accent_text_color)] uppercase">
              {t("hi")}, {getUsername(user)}
            </div>
          )}
          {/* <Divider
          style={{ width: "50px", height: "5px", backgroundColor: "red" }}
        /> */}
          <div className="logo flex items-center gap-2 mb-4">
            <h3 className="uppercase text-3xl font-semibold text-[var(--tgui--accent_text_color)]">
              moviender
            </h3>
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ width: "48px", height: "auto" }}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Link to={"/movies"} className="w-full">
              <Button after={<Icon28AddCircle />}>{t("findMovies")}</Button>
            </Link>
            <Link to={"/my"} className="w-full">
              <Button after={<Icon28Archive />} style={{ width: "100%" }}>
                {t("myMovies")}
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default MainPage;
