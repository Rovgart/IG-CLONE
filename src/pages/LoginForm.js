import { useState } from "react";

function LoginForm() {
  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });
  const inputHandler = (e) => {
    setInputs({
      [e.target.name]: e.target.value,
      ...inputs,
    });
  };
  return (
    <>
      <form className="flex flex-col gap-2" action="">
        <input
          className="px-2 py-1"
          type="text"
          name="login"
          id=""
          placeholder="login"
          value={inputs.login}
        />
        <input
          className="px-2 py-1"
          type="password"
          name="password"
          value={inputs.password}
          id=""
        />
        <div>
          <input type="submit" value="SIGN IN" />
        </div>
      </form>
    </>
  );
}
export default LoginForm;
