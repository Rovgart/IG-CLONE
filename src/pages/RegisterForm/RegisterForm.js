import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "../LoginForm.module.css";

function RegisterForm() {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [signIn, setSignIn] = useState(false);
  const inputChangeHandler = (e) => {
    const nextState = {
      ...userForm,
      [e.target.name]: e.target.value,
    };
    setUserForm(nextState);
  };
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
      if (response.ok) {
        setSignIn(true);
        localStorage.setItem("username", userForm.username);
        localStorage.setItem("password", userForm.password);
        alert("Pomyślnie załozono konto");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const FormRegisterSubmitHandler = function (e) {
    e.preventDefault();
    fetchAddUser();
  };
  return (
    <div className="flex flex-col border-slate-500 border  items-center w-1/6 mx-auto m-0 gap-4 p-3 lg:h-screen">
      <h1 className="text-3xl font-logoFont">InstaClone</h1>
      <form
        className="flex flex-col gap-2 p-2"
        onSubmit={FormRegisterSubmitHandler}
        method="POST"
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
          className={classes["signIn"]}
          type="submit"
          onChange={inputChangeHandler}
          value="Next"
        />
        <div className="text-sm mt-5 text-center text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          iure quo? Voluptatibus perferendis itaque autem laborum. Animi aperiam
          incidunt tempora temporibus molestiae delectus quidem doloremque sequi
          veniam, officia debitis nobis provident sed.
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
