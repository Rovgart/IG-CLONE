import { useState } from "react";
import 
function LoginForm() {
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
    <div className="">
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-2"
        action=""
      >
        <input
          onChange={inputHandler}
          className={"px-2"}
          type="text"
          name="login"
          id=""
          placeholder="login"
          value={inputs.login}
        />
        <input
          onChange={inputHandler}
          className="px-2 py-1"
          type="password"
          name="password"
          value={inputs.password}
          id=""
          placeholder="password"
        />
        <div className="flex gap-3">
          <input
            className="bg-slate-500 px-2 py-3 rounded-sm"
            type="submit"
            value="SIGN IN"
          />
          <input
            className="bg-red-500 px-2 py-3 rounded-sm"
            type="submit"
            value="SIGN UP"
          />
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
