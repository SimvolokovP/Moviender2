import { useTranslation } from "react-i18next";
import { IMovie } from "../models/IMovie";

const useMovieName = (movie: IMovie) => {
  const { i18n } = useTranslation();

  const getName = () => {
    if (i18n.language === "ru") {
      if (movie?.nameRu && movie?.nameRu.trim() !== "") {
        return movie?.nameRu;
      }
      if (movie?.nameOriginal && movie?.nameOriginal.trim() !== "") {
        return movie.nameOriginal;
      }
      return movie?.nameEn;
    } else if (i18n.language === "en") {
      if (movie?.nameEn && movie?.nameEn.trim() !== "") {
        return movie?.nameEn;
      }
      if (movie?.nameOriginal && movie?.nameOriginal.trim() !== "") {
        return movie?.nameOriginal;
      }
      return movie?.nameRu;
    }
    return movie?.nameOriginal;
  };

  return getName();
};

export default useMovieName;
