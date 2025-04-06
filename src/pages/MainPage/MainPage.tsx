import { Button } from "@telegram-apps/telegram-ui";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../../anim2.json";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

const MainPage = () => {
  return (
    <AnimatedPage>
      <div className="page">
        <div className="text-[var(--tgui--accent_text_color)] uppercase">
          hi, user
        </div>
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
            <Button>Find movies</Button>
          </Link>
          <Link to={"/my"} className="w-full">
            <Button style={{ width: "100%" }}>My</Button>
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default MainPage;
