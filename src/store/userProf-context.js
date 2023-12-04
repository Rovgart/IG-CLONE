import { createContext } from "react";

const userProfileContext = createContext({
  ...userProfileData,
});
export default userProfileContext;
