import { Button } from "@telegram-apps/telegram-ui";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../../anim.json";

const MainPage = () => {
  return (
    <div className="page">
      <div className="logo">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex gap-2">
        <Link to={"/movies"}>
          <Button>Find movies</Button>
        </Link>
        <Link to={"/my"}>
          <Button>My</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
