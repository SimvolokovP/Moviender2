import { User } from "@telegram-apps/sdk-react";

export const detectUserLanguage = (user: User) => {
    const detectedLanguage = user?.language_code || "en";
    return detectedLanguage;
}