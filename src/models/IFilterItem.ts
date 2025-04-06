import { IconType } from "react-icons";

export interface IFilterItem {
  text: string;
  value: number | null | string;
  icon?: IconType;
}
