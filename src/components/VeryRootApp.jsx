import { CollectionsDataProvider } from "./Context";
import Home from "./Home";

export const VeryRootApp = () => {
  return (
    <CollectionsDataProvider>
      <Home />
    </CollectionsDataProvider>
  );
};
