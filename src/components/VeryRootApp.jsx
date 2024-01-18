import { Outlet } from "react-router-dom";
import { CollectionsDataProvider } from "./Context";

export const VeryRootApp = () => {
  return (
    <CollectionsDataProvider>
      <Outlet />
    </CollectionsDataProvider>
  );
};
