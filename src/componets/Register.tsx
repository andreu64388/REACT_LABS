import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "./../store/state";

const Register: FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { users } = useAppSelector((state) => state.data);
  const handleSign = () => {
    if (users.length === 0) {
      alert("НЕТ ПОЛЬЗОВАТЕЛЕЙ");
    } else {
      if (name.trim() === "" || password.trim() === "") {
        alert("Please fill all the fields");
      } else if (users[0].name === name || users[0].password === password) {
        alert("Все хорошо, вы зашли");

        setName("");
        setPassword("");
      } else {
        alert("ДАННЫЕ НЕ совподают");
      }
    }
  };
  return (
    <>
      <div className="register">
        <div className="wrapper">
          <div className="forms">
            <h1>Login</h1>

            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </label>

            <div className="form_register">
              <button>
                {" "}
                <Link to="/login"> Зарегисрироваться</Link>
              </button>
              <button onClick={handleSign}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
