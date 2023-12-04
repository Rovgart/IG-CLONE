import { useEffect, useState } from "react";
import classes from "./LoginForm.module.css";
import { Redirect, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

function LoginForm(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });
  const [formValidity, setFormValidity] = useState(false);

  const inputHandler = (e) => {
    const nextState = {
      ...inputs,
      [e.target.name]: e.target.value,
    };
    setInputs(nextState);
  };
  const cookies = new Cookies();

  const fetchValidation = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.login,
          password: inputs.password,
        }),
      });
      const userValid = await response.json();
      console.log(userValid);
      console.log(response);
      if (!response.ok) {
        alert("Błąd logowania");
      } else {
        navigate("/MainPage");
        sessionStorage.setItem("email", inputs.login);
        sessionStorage.setItem("password", inputs.password);
        const cookie = new Cookies();
        cookie.set("token", userValid.accesToken);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const formSubmitHandler = (e) => {
    fetchValidation();
    e.preventDefault();
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Validating...");
    }, 100);
    return () => {
      clearTimeout(identifier);
      console.log("CLEANUP");
    };
  }, [inputs.login, inputs.password, props.username, props.password]);

  return (
    <div
      className={` ${
        props.mdScreen ? "col-start-3 col-end-4" : "col-start-2 col-end-4"
      } items-center h-full lg:h-auto w-screen lg:w-3/4 shadow-black shadow-sm lg:justify-start  gap-3 flex flex-col p-3 `}
    >
      <form
        onSubmit={formSubmitHandler}
        className="  lg:shadow-sm lg:w-full lg:h-auto lg:p-7 flex flex-col gap-4 mt-2"
        action=""
      >
        <h1 className="font-logoFont text-center text-3xl">InstaClone</h1>
        <div className={classes.field}>
          <input
            onChange={inputHandler}
            className={classes.login}
            type="text"
            name="login"
            id=""
            value={inputs.login}
            placeholder="login/email"
          />
          <label htmlFor="username" className={classes.label}>
            Login
          </label>
        </div>
        <div className={classes.field}>
          <input
            onChange={inputHandler}
            className={classes.password}
            type="password"
            name="password"
            value={inputs.password}
            id=""
            placeholder="password"
          />
          <label className={classes.label} htmlFor="">
            Password
          </label>
        </div>
        <div className="flex gap-3 self-center justify-center  w-1/2">
          <button
            className={`${classes["signIn"]} py-1 px-1 rounded-lg`}
            type="submit"
            value="Sign In"
          >
            Sign In
          </button>
        </div>
        <div className="flex justify-center items-center self-center w-full ">
          <div className={classes.line} />
          <p className="">OR</p>
          <div className={classes.line} />
        </div>
        <div className="flex justify-center self-center w-1/2 text-white font-normal">
          <button className=" bg-red-400 px-2 py-1 rounded-md w-full">
            <Link to={"/Register"}>Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
