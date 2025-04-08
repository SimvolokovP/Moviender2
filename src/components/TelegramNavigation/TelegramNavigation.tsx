import {
  hideBackButton,
  onBackButtonClick,
  settingsButton,
  showBackButton,
} from "@telegram-apps/sdk-react";
import { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface TelegramNavigationProps {
  children: ReactElement;
  isMainPage: boolean;
}

const TelegramNavigation: FC<TelegramNavigationProps> = ({
  children,
  isMainPage,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    settingsButton.show();
    settingsButton.onClick(() => navigate("/settings"));

    if (!isMainPage) {
      showBackButton();

      return onBackButtonClick(() => {
        navigate("/");
      });
    } else {
      hideBackButton();
    }
  }, [isMainPage]);

  return <>{children}</>;
};

export default TelegramNavigation;
