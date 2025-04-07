import { Select } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import useTg from "../../hooks/useTg";

const SettingsPage = () => {
  const [lang, setLang] = useState<string>("ru");

  const { platofrm } = useTg();

  useEffect(() => {
    console.log(platofrm);
  }, []);

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={false}>
        <div className="page">
          <Select
            header="Select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value={"ru"}>Ru</option>
            <option value={"en"}>Eng</option>
          </Select>
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default SettingsPage;
