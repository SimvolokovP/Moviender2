import { Button } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ResetMoviesListProps {
  setPage: (v: number) => void;
  disabled: boolean;
  page: number;
}

const ResetMoviesList: FC<ResetMoviesListProps> = ({
  setPage,
  disabled,
  page,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <Button
        disabled={disabled}
        onClick={() => setPage(page + 1)}
        style={{ width: "100%" }}
      >
        {t("loadMore")}
      </Button>
      <Link to={"/"} style={{ width: "100%" }}>
        <Button style={{ width: "100%" }}>{t("toHome")}</Button>
      </Link>
    </div>
  );
};

export default ResetMoviesList;
