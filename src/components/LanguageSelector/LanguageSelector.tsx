import { Select } from "@telegram-apps/telegram-ui";
import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  const { t } = useTranslation();

  useEffect(() => {
    console.log("Lang: " + i18n.language);
  }, [i18n.language]);

  return (
    <Select
      style={{ width: "100%" }}
      header={t("appLang")}
      onChange={handleLanguageChange}
      defaultValue={i18n.language}
    >
      <option value="en">English 🇬🇧</option>
      <option value="ru">Русский 🇷🇺</option>
    </Select>
  );
};

export default LanguageSelector;
