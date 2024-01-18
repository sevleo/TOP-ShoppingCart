import { CollectionsDataProvider } from "./Context";

export const VeryRootApp = ({ children }) => {
  return <CollectionsDataProvider>{children} </CollectionsDataProvider>;
};
