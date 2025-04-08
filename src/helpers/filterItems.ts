import {
  RiAliensLine,
  RiAwardLine,
  RiBearSmileLine,
  RiBlueskyLine,
  RiCompass3Line,
  RiEmojiStickerLine,
  RiGhostLine,
  RiInfraredThermometerLine,
  RiLiveLine,
  RiMovie2Line,
  RiMovieLine,
  RiSlideshow2Line,
  RiSlideshow3Line,
  RiSpyLine,
  RiStarLine,
  RiTimeLine,
  RiTvLine,
} from "react-icons/ri";
import { IFilterItem } from "../models/IFilterItem";

import { useTranslation } from "react-i18next";

export const useFilterItems = () => {
  const { t } = useTranslation();

  const filterGenres: IFilterItem[] = [
    { text: t("filterGenres.0.text"), value: null, icon: RiMovie2Line },
    {
      text: t("filterGenres.1.text"),
      value: 11,
      icon: RiInfraredThermometerLine,
    },
    { text: t("filterGenres.2.text"), value: 13, icon: RiEmojiStickerLine },
    { text: t("filterGenres.3.text"), value: 5, icon: RiSpyLine },
    { text: t("filterGenres.4.text"), value: 18, icon: RiBearSmileLine },
    { text: t("filterGenres.5.text"), value: 17, icon: RiGhostLine },
    { text: t("filterGenres.6.text"), value: 6, icon: RiAliensLine },
    { text: t("filterGenres.7.text"), value: 4, icon: RiBlueskyLine },
    { text: t("filterGenres.8.text"), value: 7, icon: RiCompass3Line },
  ];

  const filterCountries: IFilterItem[] = [
    { text: t("filterCountries.0.text"), value: null },
    { text: t("filterCountries.1.text"), value: 1 },
    { text: t("filterCountries.2.text"), value: 34 },
    { text: t("filterCountries.3.text"), value: 33 },
    { text: t("filterCountries.4.text"), value: 3 },
    { text: t("filterCountries.5.text"), value: 5 },
    { text: t("filterCountries.6.text"), value: 9 },
    { text: t("filterCountries.7.text"), value: 16 },
    { text: t("filterCountries.8.text"), value: 14 },
  ];

  const filterTypes: IFilterItem[] = [
    { text: t("filterTypes.0.text"), value: "ALL", icon: RiLiveLine },
    { text: t("filterTypes.1.text"), value: "FILM", icon: RiMovieLine },
    { text: t("filterTypes.2.text"), value: "TV_SHOW", icon: RiTvLine },
    {
      text: t("filterTypes.3.text"),
      value: "TV_SERIES",
      icon: RiSlideshow2Line,
    },
    {
      text: t("filterTypes.4.text"),
      value: "MINI_SERIES",
      icon: RiSlideshow3Line,
    },
  ];

  const filterOrder = [
    { text: t("filterOrder.0.text"), value: "RATING", icon: RiStarLine },
    { text: t("filterOrder.1.text"), value: "YEAR", icon: RiTimeLine },
    { text: t("filterOrder.2.text"), value: "NUM_VOTE", icon: RiAwardLine },
  ];

  return {
    filterItems: [filterGenres, filterCountries, filterTypes, filterOrder],
  };
};
