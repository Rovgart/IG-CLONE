import { useEffect, useState } from "react";
function LoginForm(props) {
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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formValidity) {
      alert("Kocham WSiZ");
    }
  };

  // useEffect(async () => {
  //   const fetchedData = await fetch("");
  //   const resp = (await fetchedData).json();
  //   const data = setUserData(resp);
  // });
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Validating...");
      setFormValidity(
        inputs.login.includes("@") && inputs.password.length >= 5
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
      console.log("CLEANUP");
    };
  }, [inputs.login, inputs.login]);

  return (
    <div
      className={` ${
        props.mdScreen ? "col-start-3 col-end-4" : "col-start-2 col-end-4"
      } items-center h-full lg:h-3/4 w-screen lg:w-3/4 shadow-black shadow-sm justify-start sm:justify-around gap-3 flex flex-col p-3 `}
    >
      <form
        onSubmit={formSubmitHandler}
        className=" lg:shadow-black lg:shadow-sm lg:p-7 flex flex-col gap-4 mt-2"
        action=""
      >
        <h1 className="font-logoFont text-center text-3xl">InstaClone</h1>

        <input
          onChange={inputHandler}
          className={`px-2 py-1 shadow-sm shadow-black`}
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
          {formValidity && (
            <input
              className="bg-blue-900 text-white px-2 py-2 rounded-md w-full font-semibold"
              type="submit"
              value="Sign In"
            />
          )}
        </div>
      </form>
      <div className="lg:shadow-black lg:shadow-sm p-3">
        <span className=" text-center text-account" href="#">
          Don't have an account yet ?{" "}
          <a className="text-blue-400 font-medium">Sign up</a>
        </span>
      </div>
    </div>
  );
}
export default LoginForm;
