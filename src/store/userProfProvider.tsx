import UserProfile from "../pages/UserProfile/UserProfile";
import React from "react";
import userProfileContext from "./userProf-context";

function userProfileProvider() {
  <userProfileContext.Provider value={userProfileContext}>
    <UserProfile />
  </userProfileContext.Provider>;
}
export default userProfileProvider;
