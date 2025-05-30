import { Button } from "@telegram-apps/telegram-ui";
import { Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";

const ErrorPage = () => {
  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div className="page">
          <div className="logo flex items-center gap-2 mb-4">
            <h3 className="uppercase text-3xl font-semibold text-[var(--tgui--accent_text_color)]">
              SERVER Error
            </h3>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="text-[var(--tgui--accent_text_color)] uppercase">
              sorry, please try again later
            </div>
            <Link to={"/"} className="w-full">
              <Button style={{ width: "100%" }}>To Home</Button>
            </Link>
          </div>
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default ErrorPage;
