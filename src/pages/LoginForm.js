import { useState } from "react";
function LoginForm(props) {
  const [userData, setUserData] = useState([]);

  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });
  const [formValidity, setFormValidity] = useState("");

  const inputHandler = (e) => {
    setInputs({ [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (event) => {
    event.prefentDefault();
    if (inputs.login.includes("@")) {
      setFormValidity(true);
    }
  };

  // useEffect(async () => {
  //   const fetchedData = await fetch("");
  //   const resp = (await fetchedData).json();
  //   const data = setUserData(resp);
  // });
  return (
    <div
      className={` ${
        props.mdScreen ? "col-start-3 col-end-4" : "col-start-2 col-end-4"
      } items-center h-full w-screen lg:w-3/4 shadow-black shadow-sm justify-around flex flex-col p-3 `}
    >
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-4 mt-2"
        action=""
      >
        <h1 className="font-logoFont text-center text-3xl">InstaClone</h1>

        <input
          onChange={inputHandler}
          className={"px-2 py-1 shadow-sm shadow-black"}
          type="text"
          name="login"
          id=""
          placeholder="login"
          value={inputs.login}
        />
        <input
          onChange={inputHandler}
          className="px-2 py-1 shadow-sm shadow-black"
          type="password"
          name="password"
          value={inputs.password}
          id=""
          placeholder="password"
        />
        <div className="flex gap-3">
          <input
            className="bg-blue-900 text-white px-2 py-2 rounded-md w-full font-semibold"
            type="submit"
            value="Sign In"
          />
        </div>
      </form>
      <div>
        <a className="text-purple-500 text-center text-account" href="#">
          Don't have an account yet ?
        </a>
      </div>
    </div>
  );
}
export default LoginForm;
