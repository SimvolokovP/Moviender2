import { Button, IconButton } from "@telegram-apps/telegram-ui";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import { Icon20Select } from "@telegram-apps/telegram-ui/dist/icons/20/select";
import { FC } from "react";
import { Link } from "react-router-dom";

interface StepControlProps {
  setStep: (n: number) => void;
  currentStep: number;
  maxSteps: number;
}

const StepControl: FC<StepControlProps> = ({
  currentStep,
  setStep,
  maxSteps,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        disabled={currentStep <= 1}
        onClick={() => setStep(currentStep - 1)}
      >
        Back
      </Button>
      {currentStep < maxSteps ? (
        <IconButton
          disabled={currentStep >= maxSteps}
          onClick={() => setStep(currentStep + 1)}
          mode="bezeled"
        >
          <Icon24ChevronRight />
        </IconButton>
      ) : (
        <Link to={"/"}>
          <IconButton mode="bezeled">
            <Icon20Select />
          </IconButton>
        </Link>
      )}
    </div>
  );
};

export default StepControl;
