import UserProfile from "../pages/UserProfile/UserProfile";
import userProfileContext from "./userProf-context";

function userProfileProvider() {
  <userProfileContext.Provider value={userProfileContext}>
    <UserProfile />
  </userProfileContext.Provider>;
}
export default userProfileProvider;
