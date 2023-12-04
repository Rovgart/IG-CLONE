import classes from "./User.module.css";
function User({ userImage, userName, userEmail }) {
  const userEm = `@${userName}`;
  return (
    <div className="flex  gap-3 ">
      <div className="w-1/4 flex  justify-start  ">
        <img
          className=" rounded-full object-fill max-w-w-full h-auto "
          src={userImage}
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-center w-full h-full">
        <h1 className={classes["username"]}>{userName}</h1>
        <span className={classes["userlink"]}>{userEm}</span>
      </div>
    </div>
  );
}
export default User;
