import { FC } from "react";
import { IFilterItem } from "../../models/IFilterItem";

interface FiltersTabProps {
  filtersItems: IFilterItem[];
  changeTab: (v: any) => void;
  currentValue: string | null | number;
}

const FiltersTab: FC<FiltersTabProps> = ({
  filtersItems,
  changeTab,
  currentValue,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      {filtersItems.map((item) => (
        <div
          className={`cursor-pointer w-28 h-28 flex flex-col items-center justify-center rounded-lg gap-1 transition duration-300 ease-in-out text-center text-sm text-white ${
            item.value === currentValue
              ? "bg-[var(--tgui--accent_text_color)]"
              : "bg-[var(--tgui--button_color)] opacity-80"
          }`}
          onClick={() => changeTab(item.value)}
          key={item.value}
        >
          {item?.icon && (
            <item.icon
              className={`${item.value === currentValue ? "rotate" : ""}`}
              size={32}
            />
          )}
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default FiltersTab;
