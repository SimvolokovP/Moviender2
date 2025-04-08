import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";
import useTg from "../hooks/useTg";

const { userLang } = useTg();
console.log("User Lang is " + userLang);

i18n.use(initReactI18next).init({
  resources: translations,
  lng: userLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
