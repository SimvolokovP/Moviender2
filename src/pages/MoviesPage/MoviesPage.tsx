import { useEffect, useState } from "react";
import FiltersTab from "../../components/FiltersTab/FiltersTab";
import { filterItems } from "../../helpers/filterItems";
import useFiltersStore from "../../store/useFiltersStore";
import StepControl from "../../components/StepControl/StepControl";
import { Steps } from "@telegram-apps/telegram-ui";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";

const MoviesPage = () => {
  const [step, setStep] = useState(1);
  const {
    country,
    genre,
    orderBy,
    setCountry,
    setGenre,
    setOrderBy,
    setType,
    type,
    reset,
  } = useFiltersStore();

  useEffect(() => {
    reset();
  }, []);

  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div className="page">
          <div className="w-full max-w-xs">
            <Steps count={filterItems.length} progress={step} />
          </div>
          {step === 1 && (
            <FiltersTab
              currentValue={genre}
              filtersItems={filterItems[0]}
              changeTab={(value) => setGenre(value)}
            />
          )}
          {step === 2 && (
            <FiltersTab
              currentValue={country}
              filtersItems={filterItems[1]}
              changeTab={(value) => setCountry(value)}
            />
          )}
          {step === 3 && (
            <FiltersTab
              currentValue={type}
              filtersItems={filterItems[2]}
              changeTab={(value) => setType(value)}
            />
          )}
          {step === 4 && (
            <FiltersTab
              currentValue={orderBy}
              filtersItems={filterItems[3]}
              changeTab={(value) => setOrderBy(value)}
            />
          )}
          <StepControl
            currentStep={step}
            setStep={setStep}
            maxSteps={filterItems.length}
          />
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default MoviesPage;
