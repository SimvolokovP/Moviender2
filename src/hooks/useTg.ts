import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { useMemo } from "react";

const useTg = () => {
  const lp = useMemo(() => retrieveLaunchParams(), []);

  const user = lp.tgWebAppData?.user;

  return { user };
};

export default useTg;
