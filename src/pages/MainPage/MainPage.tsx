import { Button } from "@telegram-apps/telegram-ui";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="page">
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
