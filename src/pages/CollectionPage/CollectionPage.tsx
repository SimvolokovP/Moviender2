import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";

const CollectionPage = () => {
  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div></div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default CollectionPage;
