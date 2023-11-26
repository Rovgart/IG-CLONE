import { useState } from "react";
import classes from "../LoginForm.module.css";
function RegisterForm() {
  const [userForm, setUserForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const inputChangeHandler = (e) => {
    const nextState = {
      ...userForm,
      [e.target.name]: e.target.value,
    };
    setUserForm(nextState);
  };
  const FormRegisterSubmitHandler = function (e) {
    e.preventDefault();
    const fetchAddUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username: userForm.username,
            email: userForm.email,
            password: userForm.password,
          }),
        });
        const userData = await response.json();
        console.log(userData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddUser();
  };
  return (
    <div className="flex flex-col border-slate-500 border items-center w-1/6 mx-auto m-0 gap-4 p-3 h-5/6">
      <h1 className="text-3xl font-logoFont">InstaClone</h1>
      <form
        className="flex flex-col gap-2 p-2"
        action=""
        onSubmit={FormRegisterSubmitHandler}
      >
        <div className={classes.field}>
          <input
            type="email"
            onChange={inputChangeHandler}
            value={userForm.email}
            name="email"
            id=""
            placeholder="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={classes.field}>
          <input
            type="text"
            onChange={inputChangeHandler}
            name="username"
            value={userForm.username}
            id=""
            placeholder="username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className={classes.field}>
          <input
            type="password"
            onChange={inputChangeHandler}
            name="password"
            value={userForm.password}
            id=""
            placeholder="password"
          />
          <label className={classes.label} htmlFor="password">
            Password
          </label>
        </div>
        <input
          className={classes.button}
          type="submit"
          onChange={inputChangeHandler}
          value="Next"
        />
      </form>
    </div>
  );
}
export default RegisterForm;
